// get the standard button id to change the value of price
// static button
const staticdButton = document
  .getElementById("static")
  .addEventListener("click", function () {
    // package name
    const packageName = document.getElementById("package-name");
    packageName.innerHTML = "Make Your Single Page";

    // package value
    const packageValud = document.getElementById("package-valud");
    packageValud.innerHTML = "30.00";

    // text about package
    const packageText = document.getElementById("package-text");
    packageText.innerHTML =
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary";

    // revission type
    // message one
    const delivery = document.getElementById("message-one");
    delivery.innerHTML = "1 Day Delivery";

    // message two
    const revissionType = document.getElementById("message-two");
    revissionType.innerHTML = "Maximum 2 times Revission";

    // service items list
    const serviceItemOne = document.getElementById("service-item-one");
    serviceItemOne.innerHTML = `
    <ul id="service-item-one" class="service-items">
      <li class="service-item">Design Figma</li>
      <li class="service-item">Multipage Elementor</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">MAintaine Design</li>
      <li class="service-item">8 Plugins/Extensions</li>
      <li class="service-item">Design With XD</li>
    </ul>
    `;

    // service item two
    const serviceItemTwo = document.getElementById("service-item-two");
    serviceItemTwo.innerHTML = `
    <ul id="service-item-two" class="service-items">
      <li class="service-item">Design Customization</li>
      <li class="service-item">1 Page with Elementor</li>
      <li class="service-item">2 Plugins/Extensions</li>
      <li class="service-item">Responsive Design</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">Design Customization</li>
    </ul>
    `;
  });

// standard button
const standardButton = document
  .getElementById("standard")
  .addEventListener("click", function () {
    // package name
    const packageName = document.getElementById("package-name");
    packageName.innerHTML = "Design Make this Page";

    // package value
    const packageValud = document.getElementById("package-valud");
    packageValud.innerHTML = "50.00";

    // text about package
    const packageText = document.getElementById("package-text");
    packageText.innerHTML =
      "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.";

    // revission type
    // message one
    const delivery = document.getElementById("message-one");
    delivery.innerHTML = "2 Days Delivery";

    // message two
    const revissionType = document.getElementById("message-two");
    revissionType.innerHTML = "Maximum 5 times Revission";

    // service items list
    const serviceItemOne = document.getElementById("service-item-one");
    serviceItemOne.innerHTML = `
    <ul id="service-item-one" class="service-items">
      <li class="service-item">Design Customization</li>
      <li class="service-item">1 Page with Elementor</li>
      <li class="service-item">2 Plugins/Extensions</li>
      <li class="service-item">Responsive Design</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">Design Customization</li>
    </ul>
    `;

    // service item two
    const serviceItemTwo = document.getElementById("service-item-two");
    serviceItemTwo.innerHTML = `
    <ul id="service-item-two" class="service-items">
      <li class="service-item">Design Figma</li>
      <li class="service-item">Multipage Elementor</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">MAintaine Design</li>
      <li class="service-item">8 Plugins/Extensions</li>
      <li class="service-item">Design With XD</li>
    </ul>
    `;
  });

// premium button
const premiumButton = document
  .getElementById("premium")
  .addEventListener("click", function () {
    // package name
    const packageName = document.getElementById("package-name");
    packageName.innerHTML = "Customize Your Single Page";

    // package value
    const packageValud = document.getElementById("package-valud");
    packageValud.innerHTML = "75.00";

    // text about package
    const packageText = document.getElementById("package-text");
    packageText.innerHTML =
      "I will install your desire theme and made like Theme demo and customize your single page( homepage)";

    // revission type
    // message one
    const delivery = document.getElementById("message-one");
    delivery.innerHTML = "4 Days Delivery";

    // message two
    const revissionType = document.getElementById("message-two");
    revissionType.innerHTML = "Unlimited Revission";

    // service items list
    const serviceItemOne = document.getElementById("service-item-one");
    serviceItemOne.innerHTML = `
    <ul id="service-item-one" class="service-items">
      <li class="service-item">1 Page with Elementor</li>
      <li class="service-item">Design Customization</li>
      <li class="service-item">Responsive Design</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">Design Customization</li>
      <li class="service-item">2 Plugins/Extensions</li>
    </ul>
    `;

    // service item two
    const serviceItemTwo = document.getElementById("service-item-two");
    serviceItemTwo.innerHTML = `
    <ul id="service-item-two" class="service-items">
      <li class="service-item">Multipage Elementor</li>
      <li class="service-item">Design Figma</li>
      <li class="service-item">MAintaine Design</li>
      <li class="service-item">Content Upload</li>
      <li class="service-item">Design With XD</li>
      <li class="service-item">8 Plugins/Extensions</li>
    </ul>
    `;
  });

// toggle content
const showToggleContent = (blockId) => {
  const blogBox = document.getElementById(blockId);
  blogBox.addEventListener("click", function () {
    const toggleSection = document.getElementById("toggle-content-blog");
    toggleSection.style.display = "block";

    // header section
    const innerSection = (document.getElementById("inner").style.display =
      "none");

    // main section
    const mainSection = (document.getElementById("main").style.display =
      "none");

    // footer section
    const footerSection = (document.getElementById("footer").style.display =
      "none");

    // hide toggle content when click the hide button
    const goBack = document
      .getElementById("go-back")
      .addEventListener("click", function () {
        const toggleSection = document.getElementById("toggle-content-blog");
        toggleSection.style.display = "none";

        // header section
        const innerSection = (document.getElementById("inner").style.display =
          "block");

        // main section
        const mainSection = (document.getElementById("main").style.display =
          "block");

        // footer section
        const footerSection = (document.getElementById("footer").style.display =
          "block");
      });
  });
};

showToggleContent("blog-box-one");
showToggleContent("blog-box-two");
showToggleContent("blog-box-three");

// add content in the detailes section
