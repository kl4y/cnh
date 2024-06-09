"use strict";function imgLazy(e,o){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(e," ").concat(o,"'%3E%3C/svg%3E")}function slickReinitLazy(e,o,t){var a;0<e.length&&"function"==typeof o&&"function"==typeof t&&(a=!1,doWhenVisible(e,function(){a||(e.find(".lazyload").each(function(){lazySizes.loader.unveil($(this)[0])}),t(),o(),a=!0)}))}function gerarParcelas(e,o){for(var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,n=[],t=!t||t<1?1:t,i=1;i<=o;i++){var r,s=0,l=0,c=void 0;c=i<=t||0===a?(s=e/i,l=e,!0):(l=(s=e*(r=a/100)*Math.pow(1+r,i)/(Math.pow(1+r,i)-1))*i,!1),s=s.toFixed(2),l=l.toFixed(2),n.push({num_parcela:i,valor_parcela:s,valor_total:l,sem_juros:c})}return n}function gerarParcelasMP(e,o){for(var t=[],a=!(a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1)||a<1?1:a,n=1;n<=o;n++){var i=0,r=0,s=void 0,s=n<=a?(i=e/n,r=e,!0):(r=(i=mpCalcParcela(e,n))*n,!1),i=i.toFixed(2),r=r.toFixed(2);t.push({num_parcela:n,valor_parcela:i,valor_total:r,sem_juros:s})}return t}function mpCalcParcela(e,o){return(e+e*{1:0,2:5.41,3:6.78,4:8.25,5:9.66,6:11.04,7:12.25,8:13.85,9:15.44,10:16.59,11:18.19,12:19.79}[o]/100)/o}function formataDesconto(e){var o=(e=formatMoneyBR(e)).split(",");return e="00"==o.slice(-1)[0]?o[0]:e}function _0x1280(e,o){var t=_0x53ca();return(_0x1280=function(e,o){return t[e-=461]})(e,o)}function _0x53ca(){var e=["https://cdn.lpqv.io/core/acoes/utils/validate_user.php?store_slug=","8860xqnSes","6404214IigEtA","756939kELRtx","8fUoJSH","1621797fFUUey","status","store_ver",".lpqv.io","9092951fPqiDF","19746AHlXGV","inactive","5dbSjpQ","1424734zAPqgk","location","8680344gpNSsW"];return(_0x53ca=function(){return e})()}$("body").on("click",'.slide-item[href="#"], .banner-item[href="#"]',function(e){e.preventDefault()}),$("input.number").on("input change",function(){$(this).val($(this).val().replace(/\D/g,""))}),$("input.letters").on("input",function(){$(this).val($(this).val().replace(/\d/g,""))}),function(){for(var e=_0x1280,o=_0x53ca();;)try{if(702357==-parseInt(e(467))+-parseInt(e(461))/2+-parseInt(e(469))/3*(-parseInt(e(468))/4)+-parseInt(e(476))/5*(parseInt(e(466))/6)+parseInt(e(473))/7+-parseInt(e(463))/8+parseInt(e(474))/9*(parseInt(e(465))/10))break;o.push(o.shift())}catch(e){o.push(o.shift())}}(),$(window).on("load",function(){previewMode||sessionStorage.getItem("store_ver")||setTimeout(function(){var t=_0x1280,e=t(464)+baseStore;$.getJSON(e,function(e){var o=t;sessionStorage.setItem(o(471),"1"),e&&e[o(470)]===o(475)&&(window[o(462)]="https://"+baseStore+o(472))})},3e3)});var slideFixHeightFix,$slide=$("#slide-lista");function slideDestroySlick(){$slide.hasClass("slick-slider")&&($slide.slick("unslick"),$slide.removeClass("slick-loaded"))}function slideInitSlick(){var e=1e3*$slide.data("speed"),o=1<$slide.children().length,t=!0!==previewMode;$slide.on("init",function(){setTimeout(function(){$slide.addClass("slick-loaded"),previewMode||AOS.refreshHard()},100),$slide.find("img").first().on("load",function(){$slide[0].slick.refresh()}),fixDividerPosition(),void 0!==slideFixHeightFix&&clearInterval(slideFixHeightFix),slideFixHeightFix=setInterval(function(){fixSlideHeight($slide)},500)}).slick({slidesToShow:1,slidesToScroll:1,dots:o,infinite:!0,autoplay:t,autoplaySpeed:e,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]})}function fixDividerPosition(){var e,o=$("#slide .section-divider:not(.d-none)");0<o.length&&(e=o.height(),o.css("margin-top","-"+e+"px"))}function fixSlideHeight(e){var o;0<e.length&&0<(o=e.find(".slick-list")).length&&(o.height()<10?e[0].slick.refresh():clearInterval(slideFixHeightFix))}slideInitSlick(),$(window).on("resize orientationchange",fixDividerPosition),$slide.on("change-divider",fixDividerPosition);var $blocosCarrosel=$("#carrosel-blocos");function blocosDestroySlick(){$blocosCarrosel.hasClass("slick-slider")&&$blocosCarrosel.slick("unslick")}function blocosInitSlick(){var e;$blocosCarrosel.hasClass("slick-initialized")||(e="unslick",$blocosCarrosel.hasClass("blocos-side")&&(e={slidesToShow:1}),$blocosCarrosel.slick({slidesToShow:4,slidesToScroll:1,infinite:!0,autoplay:!1,adaptiveHeight:!0,responsive:[{breakpoint:960,settings:{slidesToShow:3}},{breakpoint:768,settings:e}]}))}blocosInitSlick(),slickReinitLazy($blocosCarrosel,blocosInitSlick,blocosDestroySlick);var $depoimentosCarrosel=$("#carrosel-depoimentos"),$depoVideosCarrosel=$("#carrosel-depoimentos-videos"),$depoImagensCarrosel=$("#carrosel-depoimentos-imagens");function depoimentosDestroySlick(){$depoimentosCarrosel.hasClass("slick-slider")&&$depoimentosCarrosel.slick("unslick")}function depoVideosDestroySlick(){$depoVideosCarrosel.hasClass("slick-slider")&&$depoVideosCarrosel.slick("unslick")}function depoImagensDestroySlick(){$depoImagensCarrosel.hasClass("slick-slider")&&$depoImagensCarrosel.slick("unslick")}function depoimentosInitSlick(){var e=3<$depoimentosCarrosel.find(".carousel-item").length;$depoimentosCarrosel.slick({slidesToShow:3,slidesToScroll:3,dots:e,infinite:!0,autoplay:!1,adaptiveHeight:!0,responsive:[{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}function depoVideosInitSlick(){var e=3<$depoVideosCarrosel.find(".carousel-item").length;$depoVideosCarrosel.slick({slidesToShow:3,slidesToScroll:3,dots:e,infinite:!0,autoplay:!1,adaptiveHeight:!0,responsive:[{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}function depoImagensInitSlick(){var e=4<$depoImagensCarrosel.find(".carousel-item").length;$depoImagensCarrosel.slick({slidesToShow:4,slidesToScroll:4,dots:e,infinite:!0,autoplay:!1,adaptiveHeight:!1,responsive:[{breakpoint:960,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}depoimentosInitSlick(),depoVideosInitSlick(),depoImagensInitSlick(),slickReinitLazy($depoimentosCarrosel,depoimentosInitSlick,depoimentosDestroySlick),slickReinitLazy($depoVideosCarrosel,depoVideosInitSlick,depoVideosDestroySlick),slickReinitLazy($depoImagensCarrosel,depoImagensInitSlick,depoImagensDestroySlick);var pBuyCurTimer,countdown,produtoFotosCarrosel="#carrosel-produto",$produtoFotosCarrosel=$(produtoFotosCarrosel),produtoThumbsCarrosel="#carrosel-produto-thumbs",$produtoThumbsCarrosel=$(produtoThumbsCarrosel);function produtoDestroySlick(){$produtoFotosCarrosel.hasClass("slick-slider")&&$produtoFotosCarrosel.slick("unslick"),$produtoThumbsCarrosel.hasClass("slick-slider")&&$produtoThumbsCarrosel.slick("unslick")}function produtoInitSlick(){$produtoFotosCarrosel.slick({slidesToShow:1,slidesToScroll:1,fade:!0,swipe:!1,infinite:!0,autoplay:!1,responsive:[{breakpoint:960,settings:{fade:!1,swipe:!0}}]}),$produtoThumbsCarrosel.slick({slidesToShow:5,slidesToScroll:5,vertical:!0,verticalSwiping:!0,arrows:!1,focusOnSelect:!0,infinite:!1,asNavFor:produtoFotosCarrosel,responsive:[{breakpoint:960,settings:{slidesToShow:4,slidesToScroll:4,vertical:!1,verticalSwiping:!1}}]})}function initpBuyCur(){void 0!==pBuyCurTimer&&clearInterval(pBuyCurTimer);var e,o,t=$(".produto-comprando .md-text");0<t.length&&(e=function(){return randomNumber(6,12)},o=(o=t.html()).replace(/{.*}/g,"<span>"+e()+"</span>"),t.html(o),pBuyCurTimer=setInterval(function(){t.html(t.html().replace(/<span>.*<\/span>/g,"<span>"+e()+"</span>"))},15e3))}function initStockView(){var e,o,t,a=$(".produto-estoque");0<a.length&&(o=a.data("estoque-tipo"),t=a.data("estoque-real"),e=a.data("estoque-ficticio"),o="real"==o?t:e,t=(t=(t=a.find(".md-text").html()).replace(/{.*}/g,"<span>"+o+"</span>")).replace(/<span>.*<\/span>/g,"<span>"+o+"</span>"),a.find(".md-text").html(t))}function initCountdown(){var e,o,t,a=$(".countdown");0<a.length&&(e=a.data("mode"),o=a.data("minutes"),a=a.data("date"),"date"===e?t=new Date(a):"minutes"===e&&(t=new Date).setMinutes((new Date).getMinutes()+Number(o)),countdown&&countdown.destroy(),countdown=new Countdown(t))}function handlePaddingPagCountFixed(){var e=$(".countdown-wrapper.fixed.bottom");0<e.length?(e=e.height()+40,$("#footer").css("padding-bottom",e)):$("#footer").css("padding-bottom",0)}function validateCustomizations(){var o=[],e=$("#btn-buy");if(0<$(".produto-det-custom").length){var t=0;if($(".produto-det-custom-item .form-input").each(function(){var e=$(this);e.prop("required")&&!e.val()?t++:""!=e.val()&&o.push({customization_id:e.data("c-id"),title:e.data("c-title"),value:e.val(),price_add:e.data("c-price")})}),0<t)return showAlert("Atenção","É necessário informar a personalização!","warning"),!1;0<o.length&&(console.log(o),o=JSON.stringify(o),e.data("customizations",o))}return!0}function addToCart(e){var o,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],a=urlBase+"core/acoes/checkout/cart.php",n=0,i=0,r="",s=[],l=0,c=1,t=(t?1==t?(o="kit_old",l=1,i=baseProduct,s.push({product_id:baseProduct,product_url:baseProductURL,variant:e,quantity:l})):2==t&&(o="kit_new",n=e.kit_id,i=baseProduct,r=e.sku,c=1,s=e.variants.map(function(e){return{product_id:baseProduct,product_url:baseProductURL,variant:e.variant_sku,quantity:e.quantity}})):(o="default",l=$("#quantity").val(),i=baseProduct,s.push({product_id:baseProduct,product_url:baseProductURL,variant:e,quantity:l})),{store_token:publicToken,lp_url:urlBaseLp,type:o,kit_id:n,kit_opt_sku:r,products:s,lp_id:baseLanding,product_id:i,quantity:c});$("#btn-buy").data("customizations")&&(t.customizations=JSON.parse($("#btn-buy").data("customizations"))),showLoader(),$.getJSON(a,t,function(e){console.log(e),"success"===e.status?(hideLoader(),location.href=e.checkout_url):(hideLoader(),showAlert("Erro","Não foi possível realizar esta operação.","danger"))}).fail(function(e,o,t){console.log(e),hideLoader(),showAlert("Erro","Não foi possível realizar esta operação.","danger")})}function populaParcelas(e){var t=$("#modal-det-pagamento .installments-list");t.html(""),e.forEach(function(e){var o="";e.sem_juros&&(o=1<e.num_parcela?" sem juros":" à vista"),t.append('\n  <li class="installments-list-item">\n    <span class="installments-list-item-left"><b>'.concat(e.num_parcela,"x</b> de <b>R$ ").concat(formatMoneyBR(e.valor_parcela),"</b>").concat(o,'</span>\n    <span class="installments-list-item-right">Total: <b>R$ ').concat(formatMoneyBR(e.valor_total),"</b></span>\n  </li>"))})}function getMercadoPagoToken(){var o=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=$("#external-js").data("mp-token");""!=e?(Mercadopago.setPublishableKey(e),"function"==typeof o&&o()):(e=urlBase+"core/acoes/checkout/mercadopago_get_session.php",$.getJSON("".concat(e,"?store_token=").concat(publicToken),function(e){Mercadopago.setPublishableKey(e.mp_token),"function"==typeof o&&o()}).fail(function(e){console.log("Não foi possível obter o token do Mercado Pago."),console.log(e)}))}function getMercadoPagoInstallments(e,n){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n||1;"undefined"!=typeof Mercadopago&&Mercadopago.getInstallments({bin:555566,amount:parseFloat(e)},function(e,o){var t,a;200==e?(e=o[0].payer_costs,t=[],a=0,e.forEach(function(e){a<n&&(a++,t.push({num_parcela:e.installments,valor_total:e.total_amount,sem_juros:0===e.installment_rate,valor_parcela:e.installment_amount}))}),!1!==i&&i(t)):console.log("Não foi possível obter as parcelas do Mercado Pago.")})}function getPagSeguroToken(){var o=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=urlBase+"core/acoes/checkout/pagseguro_get_session.php";$.getJSON("".concat(e,"?store_token=").concat(publicToken),function(e){PagSeguroDirectPayment.setSessionId(e.session_id),"function"==typeof o&&o()}).fail(function(e){console.log("Não foi possível obter o token do PagSeguro.",e)})}function getPagSeguroInstallments(e,a,o){var n,i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];a=a||1,"undefined"!=typeof PagSeguroDirectPayment&&(e={amount:e,brand:n="mastercard",success:function(e){var e=e.installments[n],o=[],t=0;e.forEach(function(e){t<a&&(t++,o.push({num_parcela:e.quantity,valor_total:e.totalAmount,sem_juros:e.interestFree,valor_parcela:e.installmentAmount}))}),!1!==i?i(o):console.log(o)},error:function(e){console.log(e)}},o&&1<o&&(e.maxInstallmentNoInterest=o),PagSeguroDirectPayment.getInstallments(e))}function getInterntInstallments(e,n,i,o){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],t=urlBase+"core/acoes/checkout/parcelamentos.php";$.getJSON("".concat(t,"?origem=page&gateway=").concat(e,"&amount=").concat(n,"&cardNumber=").concat(5555666677778884,"&maxInstallments=").concat(i,"&maxInstallmentsFree=").concat(o,"&store_token=").concat(publicToken,"&storeId=").concat(baseLanding,"&lp_type=default"),function(e){console.log(e);var t=[],a=0;e.installments?e.installments.forEach(function(e){var o;a<i&&(a++,o=Number(e.amount)-n<.1,t.push({num_parcela:Number(e.installment),valor_total:Number(e.amount),sem_juros:o,valor_parcela:Number(e.installment_amount)}))}):console.log("Não foi possível obter o parcelamento."),!1!==r&&r(t)}).fail(function(e){console.log(e)})}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(o,e){var t,a=Object.keys(o);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(o),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),a.push.apply(a,t)),a}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(o,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}return o}function _defineProperty(e,o,t){return(o=_toPropertyKey(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,o){if("object"!=_typeof(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0===t)return("string"===o?String:Number)(e);t=t.call(e,o||"default");if("object"!=_typeof(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}function initComprasRecentes(){var t,a,e,n,i=$(".cr-side"),o=i.data("list"),r="1"==i.data("status");t&&clearTimeout(t),"string"==typeof o&&(o=JSON.parse(o)),0<i.length&&r&&(e=function e(){var o;n()?(o=randomNumber(30,50),i.find(".cr-side-nome").text(a.nome),i.find(".cr-side-cidade").text(a.cidade),i.addClass("active"),t=setTimeout(function(){e()},1e3*o),setTimeout(function(){i.removeClass("active")},3e3)):t&&clearTimeout(t)},n=function(){var e=Math.floor(Math.random()*(o.length-1)+0);return!!o[e]&&(a=o[e],o.splice(e,1),!0)},setTimeout(function(){e()},1e4))}function handleWhatsLatPos(){var e=$(".countdown-wrapper.fixed.bottom"),o=$(".contatos-lateral.bottom-right, .contatos-lateral.bottom-left");0<e.length&&0<o.length?(isMedia("xs")||isMedia("sm"))&&(e=e.outerHeight()+10,o.css("margin-bottom",e)):o.css("margin-bottom",0)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}produtoInitSlick(),slickReinitLazy($produtoFotosCarrosel,produtoInitSlick,produtoDestroySlick),$('.btn[href="goto:produto"]').on("click",function(e){e.preventDefault(),$("#produto").is(":visible")?smoothScroll("#produto"):$("#produto-kits").is(":visible")?smoothScroll("#produto-kits"):smoothScroll("#catalogo")}),initpBuyCur(),initStockView(),initCountdown(),$(".countdown-wrapper.fixed").on("click",function(){$("#produto").is(":visible")?smoothScroll("#produto"):smoothScroll("#produto-kits")}),handlePaddingPagCountFixed(),function(){var e,o,t,a,n,i,r,s,l,c,d,u,p,m,f,g,v,h,b,y=$("[data-variants]");0<$("#produto").length&&(e=function(){var i=[];$(".produto-det-atributo .attr-radio:checked, .produto-det-atributo .attr-select").each(function(){var e,o=$(this),t=o.attr("name"),a=slugify(o.val()),n=$('[data-opt-value="'+t+'"]');o.hasClass("attr-radio")?e=o.data("title"):o.hasClass("attr-select")&&(e=o.find("option:selected").data("title")),e?n.text(e):n.text(""),i.push(t+":"+a)}),i=i.join("|"),t(i||"u")},o=function(e){var o,t;0<g&&0<e.length&&(o=e.slice(-1)[0],h&&(o=e.filter(function(e){return e.sem_juros}).slice(-1)[0]),populaParcelas(e),o)&&(e=o.sem_juros?" sem juros":"",t=o.sem_juros?"Em até":"Ou em",($(".produto-det-preco-container").hasClass("destaque-total")?(m.hide(),p.html("".concat(t," <b>").concat(o.num_parcela,"x</b> de <b>R$ ").concat(formatMoneyBR(o.valor_parcela),"</b>").concat(e)),p):(p.hide(),m.html("<b>".concat(o.num_parcela,"x</b> de <strong>R$ ").concat(formatMoneyBR(o.valor_parcela),"</strong>").concat(e)),m)).css("opacity",1))},t=function(e){void 0!==(b=a(e))&&(console.log("Variante: "+b.sku),c.data("variant",b.sku),u.val(b.sku),""!=b.image_id&&n(b.image_id),r.hide(),0<Number(b.old_price)&&(r.html("<sup>R$</sup> "+formatMoneyBR(Number(b.old_price))),r.show()),s.html("<sup>R$</sup> "+formatMoneyBR(Number(b.sale_price))),$(".v-price").text("R$ "+formatMoneyBR(Number(b.sale_price))),$(".produto-det-preco-total").html("ou <b>R$ "+formatMoneyBR(Number(b.sale_price))+"</b> à vista"),p.css("opacity",0),m.css("opacity",0),1<g&&("mercadopago"===f?getMercadoPagoInstallments(Number(b.sale_price),g,o):"pagseguro"===f?getPagSeguroInstallments(Number(b.sale_price),g,v,o):getInterntInstallments(f,Number(b.sale_price),g,v,o)),$("[data-discount]").each(function(){var e=$(this),o=e.find(".discount-price"),t=e.find(".discount-percent"),a=e.data("discount")?Number(e.data("discount")):0,n=a*Number(b.sale_price)/100,n=Number(b.sale_price)-n,o=(o.text("R$ "+formatMoneyBR(n)),t.text(formataDesconto(a)+"% OFF"),e.data("discount-method")),t=$(".v-price-"+o);0<t.length&&t.text("R$ "+formatMoneyBR(n))}),"1"==b.automatic_stock?0<b.quantity?l.attr("max",b.quantity):l.attr("max",1):l.removeAttr("max"),l.val(1),initSpinners(),$(".produto-estoque").data("estoque-real",b.quantity),initStockView(),"1"==b.automatic_stock&&0==b.quantity?(d.show(),c.prop("disabled",!0)):(d.hide(),c.prop("disabled",!1)))},a=function(o){return i.filter(function(e){return e.slug==o})[0]},n=function(e){var e=$('#carrosel-produto .carousel-item[data-image="'+e+'"]');0<e.length&&(e=e.data("slick-index"),$("#carrosel-produto").hasClass("slick-initialized"))&&$("#carrosel-produto").slick("slickGoTo",e)},i=y.data("variants"),r=$(".produto-det-preco-de"),s=$(".produto-det-preco-por"),l=$(".produto-det-quantidade #quantity"),c=$("#btn-buy"),d=$(".produto-det-indisponivel"),u=$("#variant"),p=$(".produto-det-preco-parcelamento"),m=$(".produto-det-preco-parc"),y=p.data("installments"),f=null==y?void 0:y.gateway,g=(null==y?void 0:y.max_installments)||1,v=(null==y?void 0:y.max_installments_free)||1,h="1"==(null==y?void 0:y.installments_free_show),null!=y&&y.installments,$(".produto-det-atributo .attr-radio, .produto-det-atributo .attr-select").on("change",function(){e()}),$("body").on("recalc-parc",function(){e()}),void 0!==(y=i.filter(function(e){return"0"==e.automatic_stock||"1"==e.automatic_stock&&0<e.quantity})[0])?"u"===y.slug?t("u"):y.slug.split("|").forEach(function(e){var e=e.split(":"),o=e[0],e=e[1],t=$('.produto-det-atributo .attr-select[name="'.concat(o,'"]')),o=$('.produto-det-atributo .attr-radio[name="'.concat(o,'"][value="').concat(e,'"]'));0<t.length?t.val(e).trigger("change"):0<o.length&&o.prop("checked",!0).trigger("change")}):(y=i[0])&&t(y.slug))}(),function(){var e,o=$(".prod-col-preco-parcelas");0<o.length&&((e=function(){o.each(function(){var a=$(this),n=a.parent().find(".prod-col-preco-parc"),e=a.data("price")?Number(a.data("price")):0,o=a.data("installments"),t=null==o?void 0:o.gateway,i=(null==o?void 0:o.max_installments)||1,r=(null==o?void 0:o.max_installments_free)||1,s="1"==(null==o?void 0:o.installments_free_show);null!=o&&o.installments;function l(e){var o,t;0<e.length&&(o=e.slice(-1)[0],o=s?e.filter(function(e){return e.sem_juros}).slice(-1)[0]:o)&&(e=o.sem_juros?" <br>sem juros":"",t=o.sem_juros?"Em até":"Ou em",($(".produto-colunas").hasClass("destaque-total")?(a.html("".concat(t," <b>").concat(o.num_parcela,"x</b> de <b> R$ ").concat(formatMoneyBR(o.valor_parcela),"</b>").concat(e)),a):(n.html("<b>".concat(o.num_parcela,"x</b> de <strong>R$ ").concat(formatMoneyBR(o.valor_parcela),"</strong><br>").concat(e)),n)).css("opacity",1))}a.css("opacity",0),n.css("opacity",0),1<i&&("mercadopago"===t?getMercadoPagoInstallments(e,i,l):"pagseguro"===t?getPagSeguroInstallments(e,i,r,l):getInterntInstallments(t,e,i,r,l))})})(),$("body").on("recalc-parc",e))}(),$("#btn-buy").on("click",function(e){e.preventDefault(),previewMode||(e=$(this).data("variant"),validateCustomizations()&&addToCart(e))}),$(".btn-buy-kit-old").on("click",function(e){e.preventDefault(),previewMode||addToCart($(this).data("variant"),1)}),$(".btn-buy-kit").on("click",function(e){var o;e.preventDefault(),previewMode||(e=$(this).attr("id").replace(/\D/g,""),(e=$("#kit-prod-attr-"+e)).val()?addToCart(o="string"==typeof(o=e.val())?JSON.parse(o):o,2):e.closest(".form-group").addClass("invalid"))}),$('.prod-col-attr [name="kit-prod-attr"]').on("change",function(){var e=$(this),o=e.attr("id").replace(/\D/g,""),t=$("#btn-buy-kit-"+o),o=$("#kit-item-"+o),a=o.find(".prod-col-desc"),n=o.find(".prod-col-preco-por"),i=o.find(".prod-col-preco-total"),r=o.find(".prod-col-preco-de"),o=o.find(".prod-col-preco-parcelas"),s=e.val();""!=s&&(e.closest(".form-group").removeClass("invalid"),0<(s=JSON.parse(s)).desconto?(a.text(s.desconto+"% Desconto"),a.removeClass("d-none")):a.addClass("d-none"),n.text("R$ "+formatMoneyBR(s.sale_price)),i.html("ou <b>R$ "+formatMoneyBR(s.sale_price)+"</b> à vista"),0<s.old_price?(r.text("R$ "+formatMoneyBR(s.old_price)),r.removeClass("d-none")):r.addClass("d-none"),o.data("price",s.sale_price),t.removeClass("disabled"),t.addClass(t.data("animation-class")),$("body").trigger("recalc-parc"))}),$("body").on("mp-loaded",function(){"undefined"!=typeof Mercadopago&&getMercadoPagoToken(function(){$("body").trigger("recalc-parc")})}),$("body").on("ps-loaded",function(){"undefined"!=typeof PagSeguroDirectPayment&&getPagSeguroToken(function(){$("body").trigger("recalc-parc")})}),$(function(){previewMode||"undefined"==typeof buy_link||""==buy_link||$('[href="goto:produto"]').on("click",function(e){return e.preventDefault(),location.href=buy_link,!1})}),function(){var n,s=$("#catalogo-lista"),i=$("#catalogo-spinner");function e(){s.html(""),i.removeClass("d-none");var e,o,t=(n=(n="string"==typeof(n=(n=s.data("catalogo"))||[])?JSON.parse(n):n).filter(function(e){return 1==e.status})).map(function(e){return e.lp_id}),a=t.join("-"),a=urlBase+"core/acoes/themes/booster/catalogo.php?store_token="+publicToken+"&ids="+a;0<t.length?(t=!1,o=[],0<(e=$("#catalogo-lista-preview")).length&&(t=!0,o=JSON.parse(e.val())),t?l(r(o)):$.getJSON(a,function(e){"success"==e.status?l(r(e.result)):(console.log("Nenhum produto encontrado para o catálogo."),i.addClass("d-none"))}).fail(function(){console.log(arguments),i.addClass("d-none")})):i.addClass("d-none")}function r(e){return e.map(function(o){var e=n.filter(function(e){return e.lp_id==o.lp_id})[0];return _objectSpread(_objectSpread({},o),e)})}function l(e){s.html(""),(e=e.sort(function(e,o){return parseFloat(e.ordem)-parseFloat(o.ordem)})).forEach(function(e){var o="",t=(1==e["flag-show"]&&e["flag-text"]&&(o='<span class="cat-prod-flag '.concat(e["flag-position"],'">').concat(e["flag-text"],"</span>")),"");if(1<e.stars){for(var t='<div class="star-rating cat-prod-stars">',a=1;a<=5;a++){var n=parseInt(e.stars)>=a?"active":"";t+='<label class="'.concat(n,'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></label>')}t+="</div>"}var i="",r=(0<Number(e.old_price)&&(i='<span class="old">R$ '.concat(formatMoneyBR(e.old_price),"</span>")),"");e.parcelamento&&(r='<div class="cat-prod-parc">'.concat(mdParse(e.parcelamento,!0),"</div>")),s.append('\n      <a href="'.concat(e.url,'" class="grid-3 grid-md-4 grid-sm-6 grid-xs-6 cat-prod-wrp">\n        <div class="cat-prod">\n          <figure class="img cat-prod-img">\n            <img class="shimmer lazyload" data-src="').concat(getThumb(e.thumb_md),'" src="').concat(imgLazy(300,300),'" width="100%" height="300px" alt="').concat(e.title,'">\n            ').concat(o,'\n          </figure>\n          <div class="cat-prod-infos">\n            ').concat(t,'\n            <div class="cat-prod-title">').concat(e.title,'</div>\n            <div class="cat-prod-price">\n              ').concat(i,'\n              <span class="new">R$ ').concat(formatMoneyBR(e.sale_price),"</span>\n            </div>\n            ").concat(r,"\n          </div>\n        </div>\n      </a>"))}),i.addClass("d-none")}0<s.length&&(e(),s.on("reload-catalogo",e))}(),initComprasRecentes(),function(){$("[data-modal-pag]");var a=$("#modal-pag-inst");$("body").on("click","[data-modal-pag]",function(e){e.preventDefault();var o,t,e=$(this).data("modal-pag");!previewMode&&e&&(o=e,t=urlBase+"core/acoes/checkout/pages.php",o={page:e,store_token:publicToken},showLoader(),$.getJSON(t,o,function(e){hideLoader(),e[0].id?(e=e[0],a.find(".modal-title").html(e.titulo),a.find(".text-formatted").html(e.texto),modalOpen(a.attr("id"))):showAlert("Erro","Não foi possível realizar esta operação.","danger")}).fail(function(e,o,t){console.log(e),hideLoader(),showAlert("Erro","Não foi possível realizar esta operação.","danger")}))})}(),handleWhatsLatPos(),function(){$("#modal-consulta-pedido");var t=$("#cod-pedido"),e=$(".btn-consulta-pedido");function o(){a()?e.prop("disabled",!1):e.prop("disabled",!0)}function a(){var e=t.val();return e&&""!=e}function n(){var e,o;previewMode||(o=(o="#"===(o=t.val()).split("")[0]?o.replace("#",""):o).toUpperCase(),e=urlBase+"core/acoes/checkout/searchOrder.php",o={order_token:o,store_token:publicToken},showLoader(),$.getJSON(e,o,function(e){e&&""!=e.token?(e=urlBaseLp+"checkout/pedido/"+e.token,location.href=e):(hideLoader(),showAlert("Não encontrado!","Não encontramos nenhum pedido para o código informado.","danger"))}).fail(function(e,o,t){console.log(e),hideLoader(),showAlert("Erro","Não foi possível realizar esta operação.","danger")}))}0<t.length&&o(),t.on("input change",o),e.on("click",function(e){e.preventDefault(),a()?n():showAlert("Atenção","Informe o código do pedido.","warning")}),t.on("keyup",function(e){13===e.which&&a()&&n()})}(),function(){var e=$(".menu-mobile-btn"),o=$(".header-menu-close"),t=$(".header-menu"),a=$("body");function n(){a.addClass("scroll-disabled"),e.addClass("active"),t.addClass("active")}function i(){a.removeClass("scroll-disabled"),e.removeClass("active"),t.removeClass("active")}e.on("click",n),o.on("click",i),t.find("a").on("click",function(){(isMedia("md")||isMedia("sm")||isMedia("xs"))&&i()})}(),$(".presell-comments-list").on("click",".presell-comment-like",function(e){e.preventDefault(),$(this).toggleClass("active")}),$(".presell-comments-list").on("click",".presell-comment-reply",function(e){e.preventDefault(),smoothScroll("#presell-comments-form")}),$("#presell-comments-form").on("submit",function(e){e.preventDefault(),showLoader(),setTimeout(function(){hideLoader(),showAlert("Comentário enviado","Seu comentário foi enviado e será publicado após ser aprovado pela moderação.","success"),$("#presell-comments-form").find("input, textarea").val("")},1500)}),function(){var t,e,o,a,n,i,r,s,l,c,d,u,p,m,f,g,v,h;!previewMode&&0<$("#vsl-video").length&&(t=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"show";if(o===r)return!1;"show"===o?(console.log("SHOW ELEMENTS!"),localStorage.setItem("vsl_view"+baseLanding,1),r="show"):"hide"===o&&(console.log("HIDE ELEMENTS!"),r="hide"),1==a&&0<n&&0<i.length&&i.each(function(){var e=$(this);"show"===o?e.show():"hide"===o&&e.hide()})},o=(e=$("#vsl-video")).data("v-plataform"),a=e.data("v-delay-enable"),h=e.data("v-delay-sync"),m=e.data("v-delay-store"),g=(e.data("v-delay-time")||"00:00").split(":"),n=60*Number(g[0])+Number(g[1]),console.log(n+" SEGUNDOS DE DELAY..."),g=e.data("v-delay-elements")||"",i=$(g),r="hide",1==m&&1==localStorage.getItem("vsl_view"+baseLanding)&&t("show"),1==a&&1!=h&&setTimeout(function(){t("show")},1e3*n),1==a)&&1==h&&("youtube"===o&&(g=$("#v-player"),m=YouTubeGetID(g.data("video-url")))&&(l=function(e){e.target.playVideo(),c()},c=function(){s=setInterval(function(){window.ytPlayer.getCurrentTime()>=n&&(t("show"),clearInterval(s))},500)},(h=document.createElement("script")).src="https://www.youtube.com/iframe_api",(g=document.getElementsByTagName("script")[0]).parentNode.insertBefore(h,g),window.ytVideoID=m,window.onYouTubeIframeAPIReady=function(){window.ytPlayer=new YT.Player("v-player",{videoId:window.ytVideoID,playerVars:{controls:0,disablekb:1,modestbranding:1,color:"white",playsinline:1,rel:0,playlist:window.ytVideoID,loop:1},events:{onReady:l}})}),"vimeo"===o&&(h=e.find("iframe")[0],(d=new Vimeo.Player(h)).on("play",function(){void 0===u&&(u=setInterval(function(){d.getCurrentTime().then(function(e){n<=e&&(t("show"),clearInterval(u))})},500))})),"panda"===o&&(g="https://player.pandavideo.com.br/api.v2.js",p=e.find("iframe").attr("id"),document.querySelector("script[src='".concat(g,"']"))||((m=document.createElement("script")).src=g,m.async=!0,document.head.appendChild(m)),window.pandascripttag=window.pandascripttag||[],window.pandascripttag.push(function(){var e=new PandaPlayer(p,{onReady:function(){e.onEvent(function(e){var o;"panda_timeupdate"===e.message&&(o=e.currentTime,e.isMutedIndicator||(o<n?t("hide"):n<=o&&t("show")))})}})})),"vturb"===o&&(f=0,function e(){if("undefined"==typeof smartplayer||!smartplayer.instances||!smartplayer.instances.length)return 10<=f?void 0:(f+=1,setTimeout(function(){e()},1e3));smartplayer.instances[0].on("timeupdate",function(){"show"===r||smartplayer.instances[0].smartAutoPlay||smartplayer.instances[0].video.currentTime>=n&&t("show")})}()),"wistia"===o)&&(g="object"===("undefined"==typeof wistiaEmbeds?"undefined":_typeof(wistiaEmbeds))&&wistiaEmbeds[0]?wistiaEmbeds[0].data.media.hashedId:(h=e.find("script").first().attr("src").split("/"))[h.length-1].split(".")[0],v=!1,window._wq=window._wq||[],_wq.push({id:g,onReady:function(e){e.bind("secondchange",function(){e.time()>=n&&!0!==v&&(v=!0,t("show"))})}}))}();var $bonusCarrosel=$("#carrosel-bonus");function bonusDestroySlick(){$bonusCarrosel.hasClass("slick-slider")&&$bonusCarrosel.slick("unslick")}function bonusInitSlick(){$bonusCarrosel.hasClass("slick-initialized")||$bonusCarrosel.slick({slidesToShow:4,slidesToScroll:1,infinite:!0,autoplay:!1,adaptiveHeight:!0,responsive:[{breakpoint:960,settings:{slidesToShow:3}},{breakpoint:768,settings:"unslick"}]})}bonusInitSlick(),slickReinitLazy($bonusCarrosel,bonusInitSlick,bonusDestroySlick);
//# sourceMappingURL=script.min.js.map