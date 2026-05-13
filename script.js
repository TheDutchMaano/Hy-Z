// Minimal interactivity
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('.btn.primary')){
    // temporary demo behavior
    e.preventDefault();
    alert('Demo coming soon — follow the repo for updates.');
  }
});
