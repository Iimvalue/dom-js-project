let user = document.getElementById("user-name");
let profileSection = document.getElementById("profile");

// if (localStorage.getItem("account-name") != null) {
//   user.innerText = localStorage.getItem("account-name");
//   img =
//     localStorage.getItem("profile-img") != null
//       ? localStorage.getItem("profile-img")
//       : "";
//   profileSection.innerHTML = `
//                 <img
//                 src=https://bootdey.com/img/Content/avatar/avatar7.png
//                 alt="image"
//                 width="32"
//                 height="32"
//                 class="rounded-circle me-2"
//               />
//               <strong id="user-name"></strong>
//             </a>`;
// } else {
//   profileSection.innerText = "تسجيل الدخول";
// }

// Card Content
let industrial_revolution_data = {
  "1764–1779": [
    {
      title: "اختراع آلة Spinning Jenny",
      span: "1764",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Spinning_jenny.jpg/600px-Spinning_jenny.jpg",
      description:
        "آلة Spinning Jenny، التي اخترعها جيمس هارجريفز في عام 1764، كانت من الابتكارات الرئيسية في الثورة الصناعية. سمحت هذه الآلة للعامل بغزل عدة خيوط في وقت واحد، مما زاد بشكل كبير من إنتاجية صناعة النسيج. كان هذا الابتكار خطوة حاسمة نحو الميكنة في صناعة الغزل والنسيج، مما أدى إلى تقليل الاعتماد على العمل اليدوي وزيادة الإنتاج.",
    },
    {
      title: "تحسين محرك نيوكومن البخاري",
      span: "1769",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Newcomen_atmospheric_engine_animation.gif",
      description:
        "في عام 1769، قام جيمس واط بتحسين محرك نيوكومن البخاري، مما أدى إلى زيادة كفاءته بشكل كبير. هذا التحسين سمح باستخدام المحرك في مجموعة متنوعة من التطبيقات الصناعية، مما ساهم في تسريع عمليات الإنتاج وتقليل التكاليف. كان هذا التطوير من العوامل الرئيسية التي مهدت الطريق للثورة الصناعية.",
    },
    {
      title: "تطوير آلة Mule الهجينة",
      span: "1779",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mule-jenny.jpg",
      description:
        "في عام 1779، ابتكر صموئيل كرومبتون آلة الغزل المعروفة باسم 'Mule'، والتي جمعت بين ميزات آلة Spinning Jenny وإطار الماء. سمحت هذه الآلة بإنتاج خيوط ذات جودة عالية وبكميات كبيرة، مما أحدث ثورة في صناعة النسيج وزاد من كفاءة الإنتاج بشكل ملحوظ.",
    },
  ],

  "1785–1793": [
    {
      title: "اختراع Power Loom (النسّاجة الآلية)",
      span: "1785",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Shuttle_with_bobbin.JPG/500px-Shuttle_with_bobbin.JPG",
      description:
        "في عام 1785، اخترع إدموند كارترايت النول الآلي المعروف باسم 'Power Loom'. هذا الابتكار سمح بميكنة عملية النسيج، مما أدى إلى زيادة الإنتاجية وتقليل الحاجة إلى العمل اليدوي. كان لهذا الاختراع تأثير كبير على صناعة النسيج، حيث ساهم في تسريع الإنتاج وخفض التكاليف.",
    },
    {
      title: "اختراع Cotton Gin (مِنشار القطن)",
      span: "1793",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cotton_gin_EWM_2007.jpg/960px-Cotton_gin_EWM_2007.jpg",
      description:
        "في عام 1793، اخترع إيلي ويتني آلة 'Cotton Gin' التي سهلت عملية فصل بذور القطن عن الألياف. هذا الابتكار زاد من كفاءة إنتاج القطن وخفض التكاليف، مما ساهم في ازدهار صناعة القطن في الولايات المتحدة. ومع ذلك، أدى هذا الاختراع أيضًا إلى زيادة الطلب على العمالة المستعبدة في الجنوب الأمريكي.",
    },
  ],

  "1802–1804": [
    {
      title: "قانون Health and Morals of Apprentices Act",
      span: "1802",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jedediah_Strutt%2C_North_Mill_at_Belper%2C_Derbyshire._Rees%E2%80%99_Cyclopedia%2C_1819.jpg/500px-Jedediah_Strutt%2C_North_Mill_at_Belper%2C_Derbyshire._Rees%E2%80%99_Cyclopedia%2C_1819.jpg",
      description:
        "في عام 1802، تم إصدار قانون 'Health and Morals of Apprentices Act' في المملكة المتحدة لتحسين ظروف العمل للمتدربين في مصانع القطن. هذا القانون كان من أوائل التشريعات التي تهدف إلى حماية حقوق العمال، حيث فرض قيودًا على ساعات العمل وظروف السكن، مما مهد الطريق لتشريعات العمل المستقبلية.",
    },
    {
      title: "أول قاطرة بخارية عملية",
      span: "1804",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fcontent.argaam.com%2Fdf1bf7f4-dc2d-4aa8-9885-fabe4e3f11aa.jpg&f=1&nofb=1&ipt=2136d42a2feac31945e43b9bca8d986537cef7608f5265e26a145fffc0b0050c",
      description:
        "في عام 1804، قام ريتشارد تريفيثيك بتشغيل أول قاطرة بخارية عملية على سكة حديدية. هذا الإنجاز كان خطوة مهمة في تطوير وسائل النقل، حيث سمح بنقل البضائع والركاب بسرعة وكفاءة أكبر، مما ساهم في تعزيز التجارة والتوسع الصناعي.",
    },
  ],

  "1811–1813": [
    {
      title: "ثورات اللوديت ضد استبدال اليد بالآلة",
      span: "1811–1813",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Luddite.jpg/500px-Luddite.jpg",
      description:
        "بين عامي 1811 و1813، اندلعت ثورات اللوديت في إنجلترا، حيث قام عمال النسيج بتدمير الآلات التي كانوا يعتقدون أنها تهدد وظائفهم. هذه الحركة كانت رد فعل على التغيرات الاقتصادية والاجتماعية التي جلبتها الثورة الصناعية، وأبرزت التوترات بين العمال وأصحاب المصانع.",
    },
  ],

  "1825–1837": [
    {
      title: "افتتاح سكة ستوكتون ودارلينجتون",
      span: "1825",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tracts_vol_57_p252_1821_Plan_of_intended_Stockton_and_Darlington_Railway.jpg/960px-Tracts_vol_57_p252_1821_Plan_of_intended_Stockton_and_Darlington_Railway.jpg",
      description:
        "في عام 1825، تم افتتاح سكة حديد ستوكتون ودارلينجتون في إنجلترا، وكانت أول سكة حديدية عامة تستخدم القاطرات البخارية. هذا الحدث كان نقطة تحول في تاريخ النقل، حيث ساهم في تسهيل حركة البضائع والركاب، مما دعم التوسع الصناعي والتجاري.",
    },
    {
      title: "بدء سكة ليفربول–مانشستر للركاب",
      span: "1830",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Opening_of_the_Liverpool_and_Manchester_Railway.jpg/960px-Opening_of_the_Liverpool_and_Manchester_Railway.jpg",
      description:
        "في عام 1830، تم افتتاح سكة حديد ليفربول–مانشستر، وكانت أول سكة حديدية تربط بين مدينتين رئيسيتين باستخدام القاطرات البخارية فقط. هذا المشروع كان نموذجًا للسكك الحديدية المستقبلية، حيث قدم جداول زمنية منتظمة ونظام إشارات، مما ساهم في تحسين كفاءة النقل.",
    },
    {
      title: "براءة اختراع التلغراف الكهربائي",
      span: "1837",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Portrait_elisha_gray.jpg",
      description:
        "في عام 1837، تم تسجيل براءة اختراع للتلغراف الكهربائي، الذي سمح بإرسال الرسائل عبر الأسلاك باستخدام الإشارات الكهربائية. هذا الابتكار أحدث ثورة في مجال الاتصالات، حيث مكن من التواصل السريع عبر المسافات الطويلة، مما كان له تأثير كبير على الأعمال والحكومة والمجتمع.",
    },
  ],
};

let cardContentSection = document.getElementById("card-content");

let fourtySixToSeventyNine = document.getElementById("1764–1779");
fourtySixToSeventyNine.addEventListener("click", () => {
  fourtySixToSeventyNine.className = "nav-link active";
  eightyFiveToNinetyThree.className = "nav-link text-white";
  twoThousandTwoToTwoThousandFour.className = "nav-link text-white";
  twentyFiveToThirtySeven.className = "nav-link text-white";
  elevenToThirteen.className = "nav-link text-white";
  let heightIncreases = 50;
  let cols = 6;
  cardContentSection.innerHTML = "";
  industrial_revolution_data["1764–1779"].map((data, index) => {
    cols = index == 1 ? 12 : 6;
    console.log(cols, heightIncreases);

    cardContentSection.innerHTML += `
            <div
              class="col-${cols} d-flex justify-content-center align-items-center h-${heightIncreases}"
            >
              <a
                href="#"
                id="${data.span}"
                class="text-decoration-none text-center"
                style="max-width: 200px"
              >
                <img
                  src=${data.img}
                  class="rounded-circle mb-2"
                  width="100"
                  height="100"
                  alt="Spinning Jenny"
                />
                <div class="badge bg-white p-2 w-100">
                  <p class="mb-1 fw-bold small text-dark">
                    ${data.title}
                  </p>
                  <span class="small fst-italic text-secondary opacity-75"
                    >${data.span}</span
                  >
                </div>
              </a>
            </div>`;

    heightIncreases += 25;
    cols = 12;
  });
});

let eightyFiveToNinetyThree = document.getElementById("1785–1793");
eightyFiveToNinetyThree.addEventListener("click", () => {
  fourtySixToSeventyNine.className = "nav-link text-white";
  eightyFiveToNinetyThree.className = "nav-link active";
  twoThousandTwoToTwoThousandFour.className = "nav-link text-white";
  twentyFiveToThirtySeven.className = "nav-link text-white";
  elevenToThirteen.className = "nav-link text-white";

  let heightIncreases = 50;
  let cols = 6;
  cardContentSection.innerHTML = "";
  industrial_revolution_data["1785–1793"].map((data, index) => {
    cols = index === 1 ? 12 : 6;
    cardContentSection.innerHTML += `
      <div class="col-${cols} d-flex justify-content-center align-items-center h-${heightIncreases}">
        <a id="${data.span}" href="./discussion/discussion.html" class="text-decoration-none text-center" style="max-width: 200px">
          <img src="${data.img}" class="rounded-circle mb-2" width="100" height="100" alt="${data.title}" />
          <div class="badge bg-white p-2 w-100">
            <p class="mb-1 fw-bold small text-dark">${data.title}</p>
            <span class="small fst-italic text-secondary opacity-75">${data.span}</span>
          </div>
        </a>
      </div>`;
    heightIncreases += 25;
    cols = 12;
  });
});

// 1802–1804
let twoThousandTwoToTwoThousandFour = document.getElementById("1802–1804");
twoThousandTwoToTwoThousandFour.addEventListener("click", () => {
  fourtySixToSeventyNine.className = "nav-link text-white";
  eightyFiveToNinetyThree.className = "nav-link text-white";
  twoThousandTwoToTwoThousandFour.className = "nav-link active";
  twentyFiveToThirtySeven.className = "nav-link text-white";
  elevenToThirteen.className = "nav-link text-white";

  let heightIncreases = 50;
  let cols = 6;
  cardContentSection.innerHTML = "";
  industrial_revolution_data["1802–1804"].map((data, index) => {
    cols = index === 1 ? 12 : 6;
    cardContentSection.innerHTML += `
      <div class="col-${cols} d-flex justify-content-center align-items-center h-${heightIncreases}">
        <a id="${data.span}" href="./discussion/discussion.html" class="text-decoration-none text-center" style="max-width: 200px">
          <img src="${data.img}" class="rounded-circle mb-2" width="100" height="100" alt="${data.title}" />
          <div class="badge bg-white p-2 w-100">
            <p class="mb-1 fw-bold small text-dark">${data.title}</p>
            <span class="small fst-italic text-secondary opacity-75">${data.span}</span>
          </div>
        </a>
      </div>`;
    heightIncreases += 25;
    cols = 12;
  });
});

// 1811–1813
let elevenToThirteen = document.getElementById("1811–1813");
elevenToThirteen.addEventListener("click", () => {
  fourtySixToSeventyNine.className = "nav-link text-white";
  eightyFiveToNinetyThree.className = "nav-link text-white";
  twoThousandTwoToTwoThousandFour.className = "nav-link text-white";
  elevenToThirteen.className = "nav-link active";
  twentyFiveToThirtySeven.className = "nav-link text-white";
  let heightIncreases = 50;
  let cols = 6;
  cardContentSection.innerHTML = "";
  industrial_revolution_data["1811–1813"].map((data, index) => {
    cols = index === 1 ? 12 : 6;
    cardContentSection.innerHTML += `
      <div class="col-${cols} d-flex justify-content-center align-items-center h-${heightIncreases}">
        <a id="${data.span}" href="./discussion/discussion.html" class="text-decoration-none text-center"  style="max-width: 200px">
          <img src="${data.img}" class="rounded-circle mb-2" width="100" height="100" alt="${data.title}" />
          <div class="badge bg-white p-2 w-100">
            <p class="mb-1 fw-bold small text-dark">${data.title}</p>
            <span class="small fst-italic text-secondary opacity-75">${data.span}</span>
          </div>
        </a>
      </div>`;
    heightIncreases += 25;
    cols = 12;
  });
});

// 1825–1837
let twentyFiveToThirtySeven = document.getElementById("1825–1837");
twentyFiveToThirtySeven.addEventListener("click", () => {
  fourtySixToSeventyNine.className = "nav-link text-white";
  eightyFiveToNinetyThree.className = "nav-link text-white";
  twoThousandTwoToTwoThousandFour.className = "nav-link text-white";
  elevenToThirteen.className = "nav-link text-white";
  twentyFiveToThirtySeven.className = "nav-link active";

  let heightIncreases = 50;
  let cols = 6;
  cardContentSection.innerHTML = "";
  industrial_revolution_data["1825–1837"].map((data, index) => {
    cols = index === 1 ? 12 : 6;
    cardContentSection.innerHTML += `
      <div class="col-${cols} d-flex justify-content-center align-items-center h-${heightIncreases}">
        <a id="${data.span}" href="./discussion/discussion.html" class="text-decoration-none text-center" style="max-width: 200px">
          <img src="${data.img}" class="rounded-circle mb-2" width="100" height="100" alt="${data.title}" />
          <div class="badge bg-white p-2 w-100">
            <p class="mb-1 fw-bold small text-dark">${data.title}</p>
            <span class="small fst-italic text-secondary opacity-75">${data.span}</span>
          </div>
        </a>
      </div>`;
    heightIncreases += 25;
    cols = 12;
  });
});

let containerCardContent = document.getElementById("container-card-content");

let historySpan = document.getElementById("1764");

containerCardContent.addEventListener("click", () => {
  let array = industrial_revolution_data["1764–1779"].filter((data) => {
    return data.span == "1764";
  });

  localStorage.setItem("card-details", JSON.stringify(array[0]));
});

let historySpan1 = document.getElementById("1769");

containerCardContent.addEventListener("click", () => {
  let array = industrial_revolution_data["1764–1779"].filter((data) => {
    return data.span == "1769";
  });

  localStorage.setItem("card-details", JSON.stringify(array[0]));
});


let historySpan2 = document.getElementById("1779");

containerCardContent.addEventListener("click", () => {
  let array = industrial_revolution_data["1764–1779"].filter((data) => {
    return data.span == "1797";
  });

  localStorage.setItem("card-details", JSON.stringify(array[0]));
});
