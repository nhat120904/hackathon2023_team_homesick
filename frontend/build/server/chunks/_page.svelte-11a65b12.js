import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from './ssr-b1ec9c41.js';

const css$1 = {
  code: "#message.svelte-14vn5dr.svelte-14vn5dr{position:relative;width:100%;height:fit-content;padding:12px;display:flex;gap:12px}#logo.svelte-14vn5dr.svelte-14vn5dr{width:32px;height:32px;border-radius:50%;border:1px solid #000;transform:translateY(6px);display:flex;justify-content:center;align-items:center}#content.svelte-14vn5dr.svelte-14vn5dr{width:fit-content;max-width:60%;height:fit-content;padding:12px;border-radius:12px;border:2px solid #000;line-height:1.2}#logo.svelte-14vn5dr>img.svelte-14vn5dr{width:100%;height:100%}",
  map: null
};
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message, type } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div id="message"${add_attribute(
    "style",
    type === "user" ? "flex-direction: row-reverse;" : "flex-direction: row;",
    0
  )} class="svelte-14vn5dr"><div id="logo" class="svelte-14vn5dr"><img${add_attribute("src", type === "user" ? "user.svg" : "sys.svg", 0)}${add_attribute("alt", type === "user" ? "user" : "sys", 0)} class="svelte-14vn5dr"></div> <div id="content" class="svelte-14vn5dr">${escape(message)}</div> </div>`;
});
const css = {
  code: ".svelte-1kizsr3.svelte-1kizsr3{font-family:'Roboto', sans-serif}.svelte-1kizsr3.svelte-1kizsr3::selection{background-color:black;color:#faf0ec}#full.svelte-1kizsr3.svelte-1kizsr3{position:fixed;width:100%;height:100%;background-color:#faf0ec;display:flex;padding:12px;gap:12px}#chat.svelte-1kizsr3.svelte-1kizsr3{position:relative;width:60%;height:100%;border:2px solid black;overflow:hidden;border-radius:24px;display:flex;flex-direction:column;gap:12px;justify-content:space-between;padding:12px}#other.svelte-1kizsr3.svelte-1kizsr3{position:relative;width:40%;height:100%;display:flex;flex-direction:column;gap:12px}#collected_data.svelte-1kizsr3.svelte-1kizsr3,#log.svelte-1kizsr3.svelte-1kizsr3{width:100%;height:50%;border:2px solid black;overflow:hidden;border-radius:24px;overflow:hidden;padding:24px;display:flex;flex-direction:column;gap:12px}#logo.svelte-1kizsr3.svelte-1kizsr3{min-height:64px;min-width:64px;max-width:fit-content;background-color:black;border-radius:18px;display:flex;justify-content:center;align-items:center;font-size:36px;font-family:'Roboto', sans-serif;color:#faf0ec;transition:all 0.25s cubic-bezier(1, 0, 0, 1);font-weight:900}#logo.svelte-1kizsr3.svelte-1kizsr3:hover{background-color:#faf0ec;color:black;padding:0 12px}#logo.svelte-1kizsr3.svelte-1kizsr3::after{content:'.';font:inherit}#logo.svelte-1kizsr3.svelte-1kizsr3:hover::after{content:'omesick 💖 Hackathon.'}#mes.svelte-1kizsr3.svelte-1kizsr3{flex-grow:1;overflow-y:auto}#mes.svelte-1kizsr3.svelte-1kizsr3::-webkit-scrollbar{width:12px;border:1px solid black;border-radius:12px}#mes.svelte-1kizsr3.svelte-1kizsr3::-webkit-scrollbar-thumb{background-color:black;border-radius:12px;border:1px solid #faf0ec}#box.svelte-1kizsr3.svelte-1kizsr3{width:100%;min-height:48px;border:2px solid black;border-radius:12px;overflow:hidden;display:flex;align-items:center}#input.svelte-1kizsr3.svelte-1kizsr3{flex-grow:1;height:32px;text-align:center;border:none;background-color:transparent;font-size:16px}#collected_data.svelte-1kizsr3 h1.svelte-1kizsr3,#log.svelte-1kizsr3 h1.svelte-1kizsr3{font-family:'Roboto', sans-serif;font-size:18px;font-weight:900}#log_text.svelte-1kizsr3.svelte-1kizsr3{resize:none;height:100%;border:none;background-color:transparent}#log_text.svelte-1kizsr3.svelte-1kizsr3::-webkit-scrollbar{width:12px;border:1px solid black;border-radius:12px}#log_text.svelte-1kizsr3.svelte-1kizsr3::-webkit-scrollbar-thumb{background-color:black;border-radius:12px;border:1px solid #faf0ec}#data.svelte-1kizsr3.svelte-1kizsr3{overflow:hidden;display:flex;flex-direction:column;gap:6px}#data.svelte-1kizsr3>p.svelte-1kizsr3{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let address = "null";
  let price = "null";
  let property_type = "null";
  let area = "null";
  let bedrooms = "null";
  let bathrooms = "null";
  let house_direction = "null";
  let description = "null";
  let floors = "null";
  let installment_payment = "null";
  let furniture = "null";
  let balcony_direction = "null";
  let mes_html;
  let block_value = "";
  let textarea;
  let array_mes = [];
  $$result.css.add(css);
  {
    {
      if (array_mes.length > 0)
        mes_html.scrollTop = mes_html.scrollHeight;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-11d9uqe_START -->${$$result.title = `<title>GUI demo - team Homesick</title>`, ""}<link rel="stylesheet" href="./reset.css" class="svelte-1kizsr3"><!-- HEAD_svelte-11d9uqe_END -->`, ""} <div id="full" class="svelte-1kizsr3"><div id="chat" class="svelte-1kizsr3"><div id="logo" class="svelte-1kizsr3" data-svelte-h="svelte-118144r">H</div> <div id="mes" class="svelte-1kizsr3"${add_attribute("this", mes_html, 0)}>${each(array_mes, ({ message, type }) => {
    return `${validate_component(Message, "Message").$$render($$result, { message, type }, {}, {})}`;
  })}</div> <div id="box" class="svelte-1kizsr3"><input ${""} type="text" id="input"${add_attribute(
    "placeholder",
    "Have a question? Ask us!",
    0
  )} class="svelte-1kizsr3"${add_attribute("value", block_value, 0)}></div></div> <div id="other" class="svelte-1kizsr3"><div id="collected_data" class="svelte-1kizsr3"><h1 class="svelte-1kizsr3" data-svelte-h="svelte-1ke412i">Known information about the user:</h1> <div id="data" class="svelte-1kizsr3"><p class="svelte-1kizsr3">Address: ${escape(address)}</p> <p class="svelte-1kizsr3">Price: ${escape(price)}</p> <p class="svelte-1kizsr3">Property type: ${escape(property_type)}</p> <p class="svelte-1kizsr3">Area: ${escape(area)}</p> <p class="svelte-1kizsr3">Bedrooms: ${escape(bedrooms)}</p> <p class="svelte-1kizsr3">Bathrooms: ${escape(bathrooms)}</p> <p class="svelte-1kizsr3">House direction: ${escape(house_direction)}</p> <p class="svelte-1kizsr3">Description: ${escape(description)}</p> <p class="svelte-1kizsr3">Floors: ${escape(floors)}</p> <p class="svelte-1kizsr3">Installment payment: ${escape(installment_payment)}</p> <p class="svelte-1kizsr3">Furniture: ${escape(furniture)}</p> <p class="svelte-1kizsr3">Balcony direction: ${escape(balcony_direction)}</p></div></div> <div id="log" class="svelte-1kizsr3"><h1 class="svelte-1kizsr3" data-svelte-h="svelte-1ds0mog">Debug console:</h1> <textarea id="log_text" readonly class="svelte-1kizsr3"${add_attribute("this", textarea, 0)}></textarea></div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-11a65b12.js.map
