(() => {
  'use strict';
  const formUrl='https://docs.google.com/forms/d/e/1FAIpQLSfjO10pPcWLmF-lXTcqnZ6cOiso35QAkZc3l3E3ezAD1_cTpQ/viewform';
  const siteUrl='https://assafyan.github.io/brain-mapping-course/';
  function updateFeedback(){
    const title=document.querySelector('#article h1')?.innerText.replace(/\s+/g,' ').trim()||'ויקי הקורס';
    const pageUrl=siteUrl+(location.hash||'#home');
    const link=new URL(formUrl);
    link.searchParams.set('usp','pp_url');
    link.searchParams.set('entry.818924393',title+' | '+pageUrl);
    document.querySelectorAll('[data-feedback-link]').forEach(a=>a.href=link.href);
    document.getElementById('feedback-page').textContent=title;
  }
  window.addEventListener('hashchange',updateFeedback);
  updateFeedback();
})();
