export const stripHtml = (html) => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  var desc = (tmp.textContent || tmp.innerText || "");
  desc = desc.substring(0,140) + '...';
  return desc;
}