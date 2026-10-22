(() => {
  'use strict';
  const siteUrl='https://assafyan.github.io/brain-mapping-course/';
  const form=document.getElementById('feedback-form');
  if(!form)return;
  const message=document.getElementById('feedback-message');
  const contact=document.getElementById('feedback-contact');
  const send=document.getElementById('feedback-send');
  const status=document.getElementById('feedback-status');
  const result=document.getElementById('feedback-result');
  const receipt=document.getElementById('feedback-receipt');
  const context=document.getElementById('feedback-context');
  const drafts=new Map();
  let pageKey=location.hash||'#home';
  let submitted=false;
  let receiptTimer;

  function updateFeedback(){
    // A submitted message keeps its original page until the student starts another one.
    if(submitted)return;
    drafts.set(pageKey,{message:message.value,contact:contact.value});
    pageKey=location.hash||'#home';
    const draft=drafts.get(pageKey)||{message:'',contact:''};
    message.value=draft.message;
    contact.value=draft.contact;
    message.setCustomValidity('');
    const title=document.querySelector('#article h1')?.innerText.replace(/\s+/g,' ').trim()||'ויקי הקורס';
    context.value=title+' | '+siteUrl+pageKey;
    document.getElementById('feedback-page').textContent=title;
    status.textContent='';
  }

  document.querySelectorAll('[data-feedback-open]').forEach(button=>button.addEventListener('click',()=>{
    (submitted?result:message).scrollIntoView({behavior:'smooth',block:'center'});
    if(!submitted)message.focus({preventScroll:true});
  }));
  message.addEventListener('input',()=>message.setCustomValidity(''));
  form.addEventListener('submit',event=>{
    if(submitted){event.preventDefault();return;}
    if(!message.value.trim()){
      event.preventDefault();
      message.setCustomValidity('כתבו הודעה לפני השליחה.');
      message.reportValidity();
      return;
    }
    if(!navigator.onLine){
      event.preventDefault();
      status.textContent='אין כרגע חיבור לאינטרנט. ההודעה נשארה כאן; אפשר לשלוח כשהחיבור יחזור.';
      return;
    }
    submitted=true;
    send.disabled=true;
    form.hidden=true;
    result.hidden=false;
    status.textContent='שולחים את ההודעה… אישור הקבלה יופיע כאן.';
    // Show the receiver's actual response. An iframe load alone is not proof of success.
    receiptTimer=setTimeout(()=>{
      status.textContent='אם אישור הקבלה לא הופיע למטה, חזרו להודעה ונסו שוב. הטקסט שכתבתם נשמר כאן.';
    },15000);
  });
  receipt.addEventListener('load',()=>{
    if(!submitted)return;
    clearTimeout(receiptTimer);
    status.textContent='תוצאת השליחה:';
  });
  function returnToMessage(clear){
    clearTimeout(receiptTimer);
    submitted=false;
    result.hidden=true;
    receipt.src='about:blank';
    form.hidden=false;
    send.disabled=false;
    status.textContent='';
    if(clear){message.value='';contact.value='';updateFeedback();}
    message.focus();
  }
  document.getElementById('feedback-new').addEventListener('click',()=>returnToMessage(true));
  document.getElementById('feedback-edit').addEventListener('click',()=>returnToMessage(false));
  window.addEventListener('hashchange',updateFeedback);
  updateFeedback();
})();
