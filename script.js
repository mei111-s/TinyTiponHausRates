  const STORAGE_KEY = 'tinyhaus_rates_v1';
  const editables = document.querySelectorAll('[data-key]');
  const editBtn = document.getElementById('editBtn');
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const toast = document.getElementById('toast');

  // Load saved overrides on page load
  function loadSaved(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return;
      const data = JSON.parse(raw);
      editables.forEach(el=>{
        const key = el.dataset.key;
        if(data[key] !== undefined){
          // only replace this node's own text, not nested elements (for card-title with .sub)
          setOwnHTML(el, data[key]);
        }
      });
    }catch(e){ console.warn('Could not load saved rates', e); }
  }

  function setOwnHTML(el, html){
    // Preserve any child elements with data-key (nested), replace only direct text
    const nested = Array.from(el.children).filter(c=>c.dataset && c.dataset.key);
    el.innerHTML = html;
    nested.forEach(n=>{
      if(!el.querySelector(`[data-key="${n.dataset.key}"]`)){
        el.appendChild(n);
      }
    });
  }

  function getOwnText(el){
    // Text of element excluding nested data-key children
    let clone = el.cloneNode(true);
    clone.querySelectorAll('[data-key]').forEach(n=>n.remove());
    return clone.innerHTML.trim();
  }

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 1800);
  }

  let editing = false;
  editBtn.addEventListener('click', ()=>{
    editing = !editing;
    document.body.classList.toggle('editing', editing);
    editables.forEach(el=>el.setAttribute('contenteditable', editing ? 'true' : 'false'));
    editBtn.textContent = editing ? 'Stop editing' : 'Edit rates';
    editBtn.classList.toggle('active', editing);
    saveBtn.style.display = editing ? 'inline-block' : 'none';
    resetBtn.style.display = editing ? 'inline-block' : 'none';
  });

  saveBtn.addEventListener('click', ()=>{
    const data = {};
    editables.forEach(el=>{
      data[el.dataset.key] = getOwnText(el);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    showToast('Changes saved');
  });

  resetBtn.addEventListener('click', ()=>{
    if(confirm('Reset all text back to the original rates? This clears your saved edits.')){
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  loadSaved();