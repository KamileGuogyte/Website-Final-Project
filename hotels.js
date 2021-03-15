const hotels = [
    { 
        id: 1,
        price: 500, 
        name:  "Four Seasons Resort Bora Bora",
        link: "https://www.fourseasons.com/content/fourseasons/en/properties/borabora/landing_pages/ppc/landing_3.html/?gclid=EAIaIQobChMIrY7xgJeo5AIVidGyCh04vwLrEAAYASAAEgJkvPD_BwE&source=gaw18borS01&ef_id=EAIaIQobChMIrY7xgJeo5AIVidGyCh04vwLrEAAYASAAEgJkvPD_BwE:G:s&s_kwcid=AL!4732!3!285729215025!e!!g!!four%20seasons%20resort%20bora%20bora",
        img: "C:/Users/user11/Desktop/MyProject_Kamile/img/hotel1.jpg",
        adress: "175 98730 Bora Bora, Vaitape, French Polynesia",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        quam, excepturi cupiditate, doloribus, repellendus cumque
        inventore officia voluptates quasi reiciendis velit perferendis
        fuga suscipit harum corrupti mollitia debitis sunt odio minus?
        Quibusdam, accusantium. Numquam doloribus libero quidem quam
        alias, ab, doloremque nulla sed optio modi voluptatum voluptatem
        blanditiis, fugit soluta.`,
        square: "80 m²",
        wiev: "į jūrą",
        type: "virš vandens",
        confort: "Plokščiaekranis televizorius, Telefonas, Palydovinė televizija, „iPod“ prijungimo stotelė, nemokamas belaidis internetas",
        room:  "Svetainės zona, dušas, vonia, privatus vonios kambarys, Mini baras.",
        contacts: "+370 656 23942",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.961857679069!2d-151.70777107547724!3d-16.47317711008523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd86ce55f507%3A0xe5f1074d61ace582!2sFour%20Seasons%20Resort%20Bora%20Bora!5e0!3m2!1sen!2slt!4v1566909147799!5m2!1sen!2slt",

    }, 

    { 
        id: 2,
        price: 250, 
        name:  "Bora Bora Lagoon Resort",
        link: "https://www.fourseasons.com/borabora/services_and_amenities/other_facilities_and_services/lagoon_sanctuary/",
        img: "C:/Users/user11/Desktop/MyProject_Kamile/img/hotel2.jpg",
        adress: "175 98730 Bora Bora, Vaitape, Prancūzijos Polinezija",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        quam, excepturi cupiditate, doloribus, repellendus cumque
        inventore officia voluptates quasi reiciendis velit perferendis
        fuga suscipit harum corrupti mollitia debitis sunt odio minus?
        Quibusdam, accusantium. Numquam doloribus libero quidem quam
        alias, ab, doloremque nulla sed optio modi voluptatum voluptatem
        blanditiis, fugit soluta.`,
        square: "40 m²",
        wiev: "į jūrą",
        type: "prie jūros",
        confort: "Plokščiaekranis televizorius, Telefonas, DVD grotuvas, Palydovinė televizija, „iPod“ prijungimo stotelė, nemokamas belaidis internetas",
        room:  "Svetainės zona, dušas, vonia, privatus vonios kambarys, Mini baras.",
        contacts: "+370 656 23942",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9097.262715609291!2d-151.74164549024292!3d-16.529742100234213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bda2d367e32583%3A0x29620e96ad4c7464!2sBora%20Bora%20Lagoon%20Resort!5e0!3m2!1sen!2slt!4v1566912254723!5m2!1sen!2slt",
    }, 

    { 
        id: 3,
        price: 300, 
        name:  "Conrad Bora Bora Nui",
        link: "https://conradhotels3.hilton.com/en/hotels/french-polynesia/conrad-bora-bora-nui-PPTBNCI/index.html?WT.srch=1&WT.mc_id=zIMDPDA0APAC1MB2PSH3PPC_Google_search4cid745131518_aid41870454394_me_kkwd-3342550345575Brand_Nano6PPTBNCI7en&utm_source=Google&utm_medium=ppc&utm_campaign=paidsearch&campaignid=745131518&adgroupid=41870454394&targetid=kwd-334255034557&gclsrc=aw.ds&ds_rl=1264287",
        img: "C:/Users/user11/Desktop/MyProject_Kamile/img/hotel3.jpg",
        adress: "175 98730 Bora Bora, Vaitape, Prancūzijos Polinezija",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        quam, excepturi cupiditate, doloribus, repellendus cumque
        inventore officia voluptates quasi reiciendis velit perferendis
        fuga suscipit harum corrupti mollitia debitis sunt odio minus?
        Quibusdam, accusantium. Numquam doloribus libero quidem quam
        alias, ab, doloremque nulla sed optio modi voluptatum voluptatem
        blanditiis, fugit soluta.`,
        square: "70 m²",
        wiev: "į jūrą",
        type: "šalia jūros",
        confort: "Plokščiaekranis televizorius, Telefonas, DVD grotuvas, Palydovinė televizija, „iPod“ prijungimo stotelė, nemokamas belaidis internetas",
        room:  "Svetainės zona, dušas, vonia, privatus vonios kambarys, Mini baras.",
        contacts: "+370 656 23942",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.0298349413297!2d-151.76707167522264!3d-16.528612346720685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbce07067e993%3A0x267164a06084ff73!2sConrad%20Bora%20Bora%20Nui!5e0!3m2!1sen!2slt!4v1566911594284!5m2!1sen!2slt",
        
    },

    {

    id: 4,
        price: 800, 
        name:  "InterContinental Bora Bora Spa",
        link: "https://www.intercontinental.com/hotels/gb/en/find-hotels/hotel/list?qDest=Bora%20Bora,%20French%20Polynesia&qCiMy=72019&qCiD=29&qCoMy=72019&qCoD=30&qAdlt=1&qChld=0&qRms=1&qIta=99603195&qAkamaiCC=LT&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&srb_u=1&setPMCookies=true&glat=SEAR&qRad=483&qRdU=km",
        img: "C:/Users/user11/Desktop/MyProject_Kamile/img/hotel4.jpg",
        adress: "Motu Piti Aau, 98730, Prancūzijos Polinezija",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        quam, excepturi cupiditate, doloribus, repellendus cumque
        inventore officia voluptates quasi reiciendis velit perferendis
        fuga suscipit harum corrupti mollitia debitis sunt odio minus?
        Quibusdam, accusantium. Numquam doloribus libero quidem quam
        alias, ab, doloremque nulla sed optio modi voluptatum voluptatem
        blanditiis, fugit soluta.`,
        square: "100 m²",
        wiev: "į jūrą",
        type: "virš vandens",
        confort: "Plokščiaekranis televizorius, Telefonas, DVD grotuvas, Palydovinė televizija, „iPod“ prijungimo stotelė, nemokamas belaidis internetas",
        room:  "Svetainės zona, dušas, vonia, privatus vonios kambarys, Mini baras.",
        contacts: "+370 656 23942",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61199.23165303907!2d-151.79983830066635!3d-16.528521837107455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd58c8e35e1b%3A0x81fda639b2a452f2!2sInterContinental%20Bora%20Bora%20Resort%20Thalasso%20Spa!5e0!3m2!1sen!2slt!4v1566912103967!5m2!1sen!2slt",
        
    }

]


const rooms = document.querySelector('.hotel-container');

function hotely() {
    hotels.forEach(hotel => {
        let div = document.createElement("div");
        div.className = "hotel";
        div.innerHTML = `
        <div class="price">${hotel.price} </div>
        <h2 class="address">${hotel.name}  <a
            href="${hotel.link} "
            class="apie">Apžiūrėti viešbutį</a></h2>
        <img src=${hotel.img}  alt="hotel1" class="hotel-img" />
        <div class="hotel-info">
          <h4 class="hotel-title">${hotel.adress}</h4>
          <p>
          ${hotel.description} 
          </p>
          <div>
            <span class="hotel-property">Kiemelis:</span>${hotel.square} 
          </div>
          <div>
            <span class="hotel-property">Vaizdas:</span>${hotel.wiev} <sup>
          </div>
          <div><span class="hotel-property">Viešbučio tipas:</span>${hotel.type}  </div>
          <div>
            <span class="hotel-property">Patogumai:</span>${hotel.confort} 
          <div>
            <span class="hotel-property">Kambaryje:</span>
            ${hotel.room} 
          </div>
          <div>
            <span class="hotel-property">Kontaktai:</span>${hotel.contacts} 
          </div>
          <iframe
            src="${hotel.map} "
            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="clearfix"></div>
      `; 
      rooms.appendChild(div);

    })};

ho
