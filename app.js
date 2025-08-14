
const head=document.querySelector('.app-header');
const app=document.querySelector('.app')
const main=document.querySelector('.app-main');
const notification=document.querySelector('.notification');
const footer=document.querySelector('.app-footer');

//header content
const logo=document.createElement('img');
logo.className='logo';
logo.src='fff.png';

const appName=document.createElement('h1');
appName.textContent='Orion';
appName.className='name2';

const menu = document.createElement('span');
menu.className = 'material-icons';
menu.innerText = 'menu';
menu.id='menu';

menu.addEventListener('click', () => {
	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.width = '100vw';
	overlay.style.height = '100vh';
	overlay.className='overlay';
	overlay.style.zIndex = '999';
	overlay.id = 'menu-overlay';

	const sideMenu = document.createElement('div');
	sideMenu.style.position = 'fixed';
    sideMenu.className='side-menu';
	sideMenu.style.top = '0';
	sideMenu.style.right = '0';
	sideMenu.style.boxShadow = '-2px 0 8px rgba(0,0,0,0.2)';
	sideMenu.style.display = 'flex';
	sideMenu.style.flexDirection = 'column';
	sideMenu.style.transition = 'transform 0.3s ease';
	sideMenu.style.transform = 'translateX(0)';
	sideMenu.id = 'side-menu';

	const menuHeader = document.createElement('h2');
	menuHeader.innerText = 'citystore';
	menuHeader.style.fontSize = '1.5rem';
    menuHeader.className='pop-headings';

    const closeure=document.createElement('span');
    closeure.className='material-icons';
    closeure.innerText='close';
    closeure.style.cursor='pointer';
    closeure.id='closure';

    const headers=document.createElement('p');
    headers.className='side-header';

    headers.appendChild(menuHeader)
    headers.appendChild(closeure)
	sideMenu.appendChild(headers);

	const menuList = [
        'about',
		'services',
		'my profile',
        'register',
		'sell with us',
		'legit sellers',
		'settings',
		'privacy policy',
		'terms and conditions',
		'need help'
    ];
    menuList.forEach(list => {
        const menuItem=document.createElement('li');
        menuItem.className='lists';
        menuItem.innerText=list; 
     sideMenu.appendChild(menuItem);
     menuItem.addEventListener('click',()=> {
        if(list === 'about'){
            overlay.remove();
            sideMenu.remove()
            const about=document.createElement('div');
            about.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings2';
            title.innerText='about us';

            const aboutContent =document.createElement('p');
            aboutContent.className='about-content';
            aboutContent.innerHTML=`Orion,we are a growing service provider company
            based in Uganda,kampala.<br>
            We are offering variety of goods and services to the community in uganda and neighbouring countries.
            minus being pocket friendly in our pricing,some of the services we provide to our clients are free of charge.<br><br>
            Such as entertainment;<br>
            <li class='lines'>movie download</li>
            <li class='lines'>music download and live straming</li>
            <li class='lines'>chating with frinds</li><br>
            Are all provided at a free cost<br><br><br><br>

            You can read find any service you want on this sites homepage.
            or visit our social mdia handles for more;
            <br><br><strong>find us;</strong><br>            
            `;


            const quit=document.createElement('button');
            quit.className='save-changes';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                about.remove()
            })

            about.appendChild(title)
            about.appendChild(aboutContent)
            
            about.appendChild(quit)
            document.body.appendChild(about)
        }if(list === 'services'){
            overlay.remove();
            sideMenu.remove()
            const services=document.createElement('div');
            services.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='our services';

            const serviceBox = document.createElement('div');
            serviceBox.className='service-box';

            const serveList = [
                {name:'internet setting'},
                {name:'electronics repair'},
                {name:'printing'},
                {name:'photography'},
                {name:'movie and music'}
            ];
            serveList.forEach(list => {
                const serviceL =document.createElement('li');
                serviceL.className='card';

                const serviceName = document.createElement('p');
                serviceName.className='service-name';
                serviceName.innerText=list.name;

                serviceL.appendChild(serviceName)

                serviceBox.appendChild(serviceL)

                serviceL.addEventListener('click',() => {
                    if(list.name === 'internet setting'){
                        const overlay=document.createElement('div');
                        overlay.className='overlay';
                        

                        //add pop up
                        const msgPop =document.createElement('div');
                        msgPop.className='confirm2';

                        const message = document.createElement('p');
                        message.className='inputs2';
                        message.placeholder='issue...';
                        message.innerText='issue...';
                        message.contentEditable=true;


                        const sendBtn =document.createElement('button');
                        sendBtn.textContent='send';
                        sendBtn.className='buttons2';
                        sendBtn.addEventListener('click', () => {
                        const num = '+256744759181';
                        const msg = message.innerText;
                        const  url = `http://wa.me/${num}?text=${encodeURIComponent(msg)}`;
                        if(message.innerText=== 'issue...'){
                            msgPop.style.borderColor='red';
                            message.innerText='fill in the internet issue to be solved!';
                            message.style.color='red';
                            setTimeout(() => {
                                erase()
                            }, 3000);function erase(){
                                message.innerText='';
                                message.addEventListener('input',() => {
                                    message.style.color='white';
                                });
                            }
                            
                        }else{
                            msgPop.style.borderColor ='green';
                            setTimeout(() => {
                                load()
                            }, 1000);function load(){
                                window.open(url ,'_blank');
                            }
                        }
                        });
                        msgPop.appendChild(message)
                        msgPop.appendChild(sendBtn)
                        overlay.appendChild(msgPop)
                        serviceBox.appendChild(overlay)
                    }if(list.name === 'electronics repair'){
                        serviceL.addEventListener('click', () => {   
                        const repairBoard =document.createElement('div');
                        repairBoard.className='repair-board';
                        



                        serviceBox.appendChild(repairBoard)
                        });
                    }if(list.name === 'printing') {
                        serviceL.addEventListener('click', () => {   
                        const repairBoard =document.createElement('div');
                        repairBoard.className='repair-board';
                        



                        serviceBox.appendChild(repairBoard)
                        });
                    }if(list.name === 'photography'){
                        serviceL.addEventListener('click', () => {   
                        const repairBoard =document.createElement('div');
                        repairBoard.className='repair-board';
                        



                        serviceBox.appendChild(repairBoard)
                        });
                    }if(list.name === 'movie and music'){
                        serviceL.addEventListener('click', () => {   
                        const repairBoard =document.createElement('div');
                        repairBoard.className='repair-board';
                        



                        serviceBox.appendChild(repairBoard)
                        });
                    }
                    });
                });

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                services.remove()
            })

            services.appendChild(title)
            services.appendChild(serviceBox)
            services.appendChild(quit)
            document.body.appendChild(services)
        }
        if(list === 'my profile'){
            overlay.remove();
            sideMenu.remove()
            const profile=document.createElement('div');
            profile.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='my profile';

            const profileImage = document.createElement('img');
            profileImage.className = 'circular-images';
            profileImage.src = 'ff.png';
            profileImage.alt = 'profile';

            const profileContent = document.createElement('fieldset');
            profileContent.className = 'cart-content';
            const legend = document.createElement('legend');
            legend.className = 'legend';
            legend.innerHTML = 'my email';
            profileContent.innerText = 'example@gmail.com';
            profileContent.contentEditable = true;
            profileContent.appendChild(legend);

            const profilePhone = document.createElement('fieldset');
            profilePhone.className = 'cart-content';
            const legend2 = document.createElement('legend');
            legend2.className = 'legend';
            legend2.innerHTML = 'phone number';
            profilePhone.innerText = '+(code) 744759181';
            profilePhone.contentEditable = true;
            profilePhone.appendChild(legend2);

            const profileBio = document.createElement('fieldset');
            profileBio.className = 'cart-content';
            const legend3 = document.createElement('legend');
            legend3.className = 'legend';
            legend3.innerHTML = 'my bio';
            profileBio.innerHTML = 'i am example <br>a full-stack web and app developer, crafting beautiful systems in various programming languages.<br><br>contact me; +256-765-003-100';
            profileBio.contentEditable = true;
            profileBio.appendChild(legend3);

            const save = document.createElement('button');
            save.className = 'save-changes';
            save.innerText = 'save changes';
            save.addEventListener('click', async () => {
                const email = profileContent.innerText;
                const phone = profilePhone.innerText;
                const bio = profileBio.innerHTML;

                try {
                    const response = await fetch('', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            phone,
                            bio
                        })
                    });
                    if (response.ok) {
                        save.innerText = 'Saved!';
                        save.style.backgroundColor = 'green';
                        setTimeout(() => {
                            save.innerText = 'save changes';
                            save.style.backgroundColor = '';
                        }, 2000);
                    } else {
                        save.innerText = 'Error!';
                        save.style.backgroundColor = 'red';
                        setTimeout(() => {
                            save.innerText = 'save changes';
                            save.style.backgroundColor = '';
                        }, 2000);
                    }
                } catch (error) {
                    save.innerText = 'Failed!';
                    save.style.backgroundColor = 'red';
                    setTimeout(() => {
                        save.innerText = 'save changes';
                        save.style.backgroundColor = '';
                    }, 2000);
                }
            });


            profile.appendChild(title)
            profile.appendChild(profileImage);
            profile.appendChild(profileContent);
            profile.appendChild(profilePhone);
            profile.appendChild(profileBio);
            profile.appendChild(save);

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                profile.remove()
            })

            
            profile.appendChild(quit)
            document.body.appendChild(profile)
        }
        if(list === 'register'){
            sideMenu.remove();
            overlay.remove()
            const formBord =document.createElement('div');
              formBord.className='sign-overlay';
              formBord.innerHTML=`<h1 class='pop-headings2'>signup</h1><br><p>Remember to read carefully all the terms and conditions of Plaxedas</p>`


               const form =document.createElement('fieldset')
               form.className='sign-modal';
               form.id='signupForm';
               
               const name=document.createElement('input');
               name.type='text';
               name.name='name';
               name.placeholder='full name';
               name.required=true;

               const email=document.createElement('input');
               email.type='email';
               email.name='email';
               email.placeholder='email';
               email.required=true;

               const phone=document.createElement('input');
               phone.type='text';
               phone.name='phone';
               phone.placeholder='phone';
               phone.required=true;

               const password=document.createElement('input');
               password.type='password';
               password.name='password';
               password.placeholder='password';
               password.maxLength='8';
               password.required=true;

               const btn=document.createElement('button');
               btn.type='submit';
               btn.innerText='submit';
               
               form.appendChild(name)
               form.appendChild(email)
               form.appendChild(phone)
               form.appendChild(password)
               form.appendChild(btn)
            formBord.appendChild(form)

            const response=document.createElement('div');
            response.id='response';
            formBord.appendChild(response)
            document.body.appendChild(formBord)

            document.getElementById('signupForm').addEventListener('submit',function(e){
                e.preventDefault();

                const formData = new FormData(this);

                fetch('register.php',{
                    method:'POST',
                    body:formData
                }).then(res => res.text()).then(data => {
                    document.getElementById('response').textContent = data;
                }).catch(err => {
                    document.getElementById('response').textContent = 'Error:' + err;
                });
            });
        }if(list === 'sell with us'){
            overlay.remove();
            sideMenu.remove()
            const sell=document.createElement('div');
            sell.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='sell with us';

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                sell.remove()
            })

            sell.appendChild(title)
            sell.appendChild(quit)
            document.body.appendChild(sell)
        }
        if(list === 'legit sellers'){
            overlay.remove();
            sideMenu.remove()
            const legit=document.createElement('div');
            legit.className='about';

            const dashboard = document.createElement('div');
            dashboard.className='dashboard';
            const dashboardTitle = document.createElement('p');
            dashboardTitle.className='pop-headings2';
            dashboardTitle.innerText='legit sellers dashboard';
            dashboard.appendChild(dashboardTitle);
            dashboard.addEventListener('click', () => {
                window.location.href='dash.html';
            });
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='legit sellers';

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                legit.remove()
            })

            legit.appendChild(title)
            legit.appendChild(dashboard)
            legit.appendChild(quit)
            document.body.appendChild(legit)
        }
        if(list === 'settings'){
            overlay.remove();
            sideMenu.remove()
            const settings=document.createElement('div');
            settings.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='settings';
            settings.appendChild(title)

            const themeLine = [
                'theme',
                'font size',
                'notifications',
                ''
            ]

            const themes = [
                'light',
                'dark',
                'system'
            ];
            themes.forEach(theme => {
                const themeBtn =document.createElement('li');
                themeBtn.className='line';
                themeBtn.innerText=theme;
                themeBtn.addEventListener('click',() => {
                    if(theme === 'light'){
                        document.body.style.color='black';
                        document.body.style.backgroundColor='white';
                    }
                });
                
            settings.appendChild(themeLine)
               
            });

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                settings.remove()
            })

            settings.appendChild(quit)
            document.body.appendChild(settings)
        }
        if(list === 'privacy policy'){
            overlay.remove();
            sideMenu.remove()
            const privacy=document.createElement('div');
            privacy.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='privacy policy';

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                privacy.remove()
            })

            privacy.appendChild(title)
            privacy.appendChild(quit)
            document.body.appendChild(privacy)
        }
        if(list === 'terms and conditions'){
            overlay.remove();
            sideMenu.remove()
            const terms=document.createElement('div');
            terms.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='terms and conditions';

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                terms.remove()
            })

            terms.appendChild(title)
            terms.appendChild(quit)
            document.body.appendChild(terms)
        }
        if(list === 'need help'){
            overlay.remove();
            sideMenu.remove()
            const help=document.createElement('div');
            help.className='about';
            
            const title=document.createElement('p');
            title.className='pop-headings';
            title.innerText='need help';

            const quit=document.createElement('button');
            quit.className='quit';
            quit.innerText='exit';
            quit.addEventListener('click',() => {
                help.remove()
            })

            help.appendChild(title)
            help.appendChild(quit)
            document.body.appendChild(help)
        }
    });
});
	closeure.addEventListener('click', () => {
	document.body.removeChild(overlay);
	});
	document.body.appendChild(overlay);
	overlay.appendChild(sideMenu);
});

head.appendChild(logo)
head.appendChild(appName)
head.appendChild(menu)




const buttonCase=document.createElement('div');
buttonCase.className='button-case';
const items = [
    'movies',
	'music',
	'accessories',
	'printing',
	'photography',
    'repair',
	'transportation',
	'food',
	'gadgets',
	'cloth'
];
items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'shop-item-btn';
    btn.innerText = item;
    buttonCase.appendChild(btn);
	
});

const newItemsModal=document.createElement('div');
newItemsModal.className='default-display';

const slider=document.createElement('div');
slider.className='slider';


const headlines = document.createElement('fieldset');
headlines.className='headlines';
const subheads = document.createElement('legend');
subheads.innerText='exclussive';
subheads.className='sub-heads';
headlines.appendChild(subheads)
//headline content
const Hlines = [
    'line a'
];
const Hlines2 = [
        'line b'
    ];
Hlines.forEach(line => {
    const hline=document.createElement('li');
    hline.className='changers';
    headlines.appendChild(hline)
    const content= [
            'love1.jpg',
            'love2.jpg',
            'love3.jpg',
            'love4.jpg',
            'horro1.jpg'
        ];
        let index = 1;
        const imgElement=document.createElement('img');
        imgElement.className='changer-img';

        setInterval(() => {
            index = (index + 1) %
            content.length;
            imgElement.src=content[index];
        }, 2500);
    
    hline.appendChild(imgElement)
});
Hlines2.forEach(line => {
        const hline2 =document.createElement('li');
        hline2.className='changers';
        headlines.appendChild(hline2)

        const content2= [
            'act1.jpg',
            'act2.jpg',
            'act3.jpg',
            'act4.jpg',
        ];
        let index = 1;
        const imgElement=document.createElement('img');
        imgElement.className='changer-img';

        setInterval(() => {
            index = (index + 1) %
            content2.length;
            imgElement.src=content2[index];
        }, 2000);
        hline2.appendChild(imgElement)
    });

slider.appendChild(headlines)
app.appendChild(slider)

const note=document.createElement('li');
note.innerText='trending';
note.className='top-sales';


app.appendChild(buttonCase)
app.appendChild(note)


	const newItemBox=document.createElement('div');
	newItemBox.className='new-items';
const itemsList = [
	{ name: 'robin hoods', price: 'Ugx1000', video:'', img:'act4.jpg' },
	{ name: 'monster run', price: 'Ugx1800', video:'', img:'act3.jpg' },
	{ name: 'die alone', price: 'Ugx1100', video:'The gardener ICE P.mp4', img:'act2.jpg' },
	{ name: 'dark forest', price: 'Ugx900', video:'',img:'act1.jpg' },
	{ name: 'New Balance 574', price: 'Ugx1000', video:'', img:'shoe.jpg' },
	{ name: 'Converse Chuck Taylor', price: 'Ugx650', video:'', img:'shoe.jpg' },
	{ name: 'Vans Old Skool', price: 'Ugx2000', video:'', img:'shoe.jpg' },
	{ name: 'Asics Gel-Kayano', price: 'Ugx1600', video:'', img:'shoe.jpg' },
	{ name: 'Under Armour HOVR', price: 'Ugx1400', video:'', img:'shoe.jpg' },
	{ name: 'Hoka One One Bondi', price: 'Ugx1500', video:'', img:'shoe.jpg' },
	{ name: 'Saucony Triumph', price: 'Ugx1300', video:'', img:'shoe.jpg' },
	{ name: 'Brooks Ghost', price: 'Ugx1200', video:'', img:'shoe.jpg' },
	{ name: 'Mizuno Wave Rider', price: 'Ugx1200', video:'', img:'shoe.jpg' },
	{ name: 'Fila Disruptor', price: 'Ugx800', video:'', img:'shoe.jpg' },
	{ name: 'K-Swiss Classic', price: 'Ugx750', video:'', img:'shoe.jpg' }
];
itemsList.forEach(item => {
	const itemDiv = document.createElement('div');
	itemDiv.className = 'item';

	const itemName = document.createElement('div');
	itemName.className = 'item-name';
	itemName.innerText = item.name;

	const itemPrice = document.createElement('div');
	itemPrice.className = 'item-price';
	itemPrice.innerText = item.price;

	const imgage=document.createElement('img');
	imgage.className='image-item';
	imgage.src=item.img;

	itemDiv.appendChild(imgage)
	itemDiv.appendChild(itemName);
	itemDiv.appendChild(itemPrice);


	//buy buttons
	const itemBtns=document.createElement('div');
	itemBtns.className='item-btns';

	const buyBtn=document.createElement('li');
	buyBtn.className='buy-btn';
	buyBtn.innerText='download';

    buyBtn.addEventListener('click', () => {
        const overlay=document.createElement('div');
        overlay.className='overlay';
        document.body.appendChild(overlay)
        const confirm=document.createElement('div');
        confirm.className='confirm';
        confirm.innerHTML=`you are about to purchase ${item.name} at ${item.price},click ok to confirm`+'<br><br>';
        //confirm buttons
        const ok=document.createElement('button');
        ok.className='invisible-btn';
        ok.innerText='ok';

        

        const cancel=document.createElement('button');
        cancel.className='invisible-btn';
        cancel.innerText='cancel';

        if(confirm) {
            ok.addEventListener('click',() => {
               overlay.remove();

               const link =document.createElement('a');
               link.href = item.video;
               link.download = item.name + '<>downloaded at ORION'+'<tell:+256744759181>';
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
        });
    }
        if(confirm){
            cancel.addEventListener('click', ()=> {
                confirm.remove();
                const cancelNotice=document.createElement('div');
                cancelNotice.className='confirm';
                cancelNotice.innerText='purchase cancelled successfully!';
                cancelNotice.style.color='red';
                overlay.appendChild(cancelNotice)
                setTimeout(() => {
                    cancelNotice.remove();
                    overlay.remove();
                }, 3000);
            })
        }

        confirm.appendChild(ok)
        confirm.appendChild(cancel)

        overlay.appendChild(confirm)
    });
	


    
	const cartBtn=document.createElement('li');
	cartBtn.className='cart-btn';
	cartBtn.innerText='+ cart';
	itemBtns.appendChild(buyBtn)
	itemBtns.appendChild(cartBtn)
	itemDiv.appendChild(itemBtns)

	newItemBox.appendChild(itemDiv);
	newItemsModal.appendChild(newItemBox)});

    const secUpdate = document.createElement('li');
    secUpdate.className='top-sales';
    secUpdate.innerText='category';

    newItemsModal.appendChild(secUpdate)

    const secItemBox=document.createElement('div');
    secItemBox.className='new-items';

    const itemsList2 = [
        { name: 'action packed', img:'act1.jpg' },
	    { name: 'comedy', img:'act2.jpg' },
	    { name: 'drama', img:'love1.jpg' },
	    { name: 'love story', img:'love4.jpg' },
	    { name: 'high school', img:'act3.jpg' },
	    { name: 'adventure', img:'act4.jpg' },
	    { name: 'horror', img:'horro1.jpg' },
	    { name: 'fantasy', img:'shoe.jpg' },
	    { name: 'romance', img:'shoe.jpg' },
	    { name: 'korean', img:'shoe.jpg' },
	    { name: 'series', img:'shoe.jpg' },
	    { name: '', img:'shoe.jpg' },
    ];

    itemsList2.forEach(item2 => {
        const deal2=document.createElement('div');
    deal2.className='item';
    secItemBox.appendChild(deal2)

    const name=document.createElement('div');
    name.className='name';
    name.innerText=item2.name;

    const image=document.createElement('img');
    image.className='image-item';
    image.src=item2.img;

    const price=document.createElement('div');
    price.innerText=item2.price;


    deal2.appendChild(image)
    deal2.appendChild(name)
    
    deal2.addEventListener('click', () => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.style.zIndex = '9999';

        // Modal container
        const modal = document.createElement('div');
        modal.className = 'category-modal';

        // Modal header
        const header = document.createElement('div');
        header.className = 'modal-header';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';

        const title = document.createElement('span');
        title.className = 'pop-headings2';
        title.innerText = item2.name || 'Category';

        const closeBtn = document.createElement('span');
        closeBtn.className = 'material-icons';
        closeBtn.innerText = 'close';
        closeBtn.style.cursor = 'pointer';
        closeBtn.addEventListener('click', () => {
            overlay.remove();
        });

        header.appendChild(title);
        header.appendChild(closeBtn);
        modal.appendChild(header);

        // Modal content area
        const content = document.createElement('div');
        content.className = 'modal-content';
        content.innerText = 'Loading...';
        modal.appendChild(content);

        fetch('dash.html')
            .then(res => res.text())
            .then(html => {
                // Try to extract items from dash.html (very basic, expects JSON or JS array in a <script>)
                // For demo, just show a message or you can parse as needed
                // You may want to use an API endpoint in production
                content.innerText = '';
                // Example: show a placeholder item
                const itemDiv = document.createElement('div');
                itemDiv.innerText = 'Fetched items from dash.html would appear here.';
                content.appendChild(itemDiv);
            })
            .catch(() => {
                content.innerText = 'Failed to load items.';
            });

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    });
    });

    newItemsModal.appendChild(secItemBox)

    const music =document.createElement('li');
    music.innerText='music and entertainment';
    music.className='top-sales';

    newItemsModal.appendChild(music)

app.appendChild(newItemsModal)


const hotDeals=document.createElement('li');
hotDeals.innerText='hot deals';
hotDeals.className='hot-deals';

const hotdealsList = [
    { name: 'Nike Air Max', price: '$120', img:'shoe.jpg' },
	{ name: 'Adidas Ultraboost', price: '$180', img:'shoe.jpg' },
	{ name: 'Puma RS-X', price: '$110', img:'shoe.jpg' },
	{ name: 'Reebok Classic', price: '$90', img:'shoe.jpg' },
	{ name: 'New Balance 574', price: '$100', img:'shoe.jpg' },
	{ name: 'Converse Chuck Taylor', price: '$65', img:'shoe.jpg' },
	{ name: 'Vans Old Skool', price: '$70', img:'shoe.jpg' },
	{ name: 'Asics Gel-Kayano', price: '$160', img:'shoe.jpg' },
	{ name: 'Under Armour HOVR', price: '$140', img:'shoe.jpg' },
	{ name: 'Hoka One One Bondi', price: '$150', img:'shoe.jpg' },
	{ name: 'Saucony Triumph', price: '$130', img:'shoe.jpg' },
	{ name: 'Brooks Ghost', price: '$120', img:'shoe.jpg' },
	{ name: 'Mizuno Wave Rider', price: '$110', img:'shoe.jpg' },
	{ name: 'Fila Disruptor', price: '$80', img:'shoe.jpg' },
	{ name: 'K-Swiss Classic', price: '$75', img:'shoe.jpg' }
];
hotdealsList.forEach(hotDeal => {
    const deal=document.createElement('div');
    deal.className='item';
    main.appendChild(deal)

    const name=document.createElement('div');
    name.innerText=hotDeal.name;

    const image=document.createElement('img');
    image.className='image-item';
    image.src=hotDeal.img;

    const price=document.createElement('div');
    price.innerText=hotDeal.price;


    deal.appendChild(image)
    deal.appendChild(name)
    deal.appendChild(price)

    const itemBtns=document.createElement('div');
	itemBtns.className='item-btns';

	const buyBtn=document.createElement('button');
	buyBtn.className='buy-btn';
	buyBtn.innerText='buy';
	buyBtn.addEventListener('click', () => {
        const overlay=document.createElement('div');
        overlay.className='overlay';
        document.body.appendChild(overlay)
        const confirm=document.createElement('div');
        confirm.className='confirm';
        //confirm buttons
        const ok=document.createElement('button');
        ok.className='invisible-btn';
        ok.innerText='ok';

        const cancel=document.createElement('button');
        cancel.className='invisible-btn';
        cancel.innerText='cancel';
        confirm.appendChild(ok)
        confirm.appendChild(cancel)

        overlay.appendChild(confirm)
    });
	


	const cartBtn=document.createElement('button');
	cartBtn.className='cart-btn';
	cartBtn.innerText='add to cart';

    //cart addition btn event listener




    deal.appendChild(buyBtn)
    deal.appendChild(cartBtn)
});


main.appendChild(hotDeals)



//app notification area
const notify=document.createElement('section');
notify.className='updates';
notify.innerText='app notifications';


const homeBtn=document.createElement('span');
homeBtn.className='material-icons';
homeBtn.innerText='home';
homeBtn.id='homeBtn';

const hotDealsBtn=document.createElement('span');
hotDealsBtn.className='material-icons';
hotDealsBtn.innerText='local_offer';
hotDealsBtn.id='hotDealsBtn';

const cartBtn=document.createElement('span');
cartBtn.className='material-icons';
cartBtn.innerText='shopping_cart';
cartBtn.id='cartBtn';

const profileBtn=document.createElement('span');
profileBtn.className='material-icons';
profileBtn.innerText='person';
profileBtn.id='profileBtn';


footer.appendChild(homeBtn);
footer.appendChild(hotDealsBtn);
footer.appendChild(cartBtn);
footer.appendChild(profileBtn);

//home btn
homeBtn.addEventListener('click',() => {
    window.location.href='#';
})

//hot deals button
hotDealsBtn.addEventListener('click', () => {
    const hots = document.createElement('div');
    hots.className='hots';
    
    //hot deals content
    const hotHead = document.createElement('h4');
    hotHead.className='pop-headings2';
    hotHead.innerText='hot deals';

    const closeHead = document.createElement('span');
    closeHead.className='material-icons';
    closeHead.innerText='close';
    closeHead.addEventListener('click', () => {
        hots.remove()
    });
    hotHead.appendChild(closeHead)
    hots.appendChild(hotHead)

    const hotItems = [
        {name: 'item1' , price:'Ugx:1.5M' , img:'gag1.jpeg'},
        {name: 'item2' , price:'Ugx:100' , img:'fff.png'},
        {name: 'item3' , price:'Ugx:100' , img:'act1.jpg'},
        {name: 'item4' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item5' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item6' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item7' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item8' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item9' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item10' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item11' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item12' , price:'Ugx:100' , img:'ff.png'},
        {name: 'item13' , price:'Ugx:100' , img:'ff.png'}
    ];
    hotItems.forEach(hotItem => {
        const hot1 = document.createElement('div');
        hot1.className='item2';
        
        const hotName=document.createElement('div');
        hotName.innerText=hotItem.name;

        const hotImg = document.createElement('img');
        hotImg.className='image-item2';
        hotImg.src = hotItem.img;

        const hotPrice = document.createElement('div');
        hotPrice.innerText = hotItem.price;

        const dealBtn = document.createElement('li');
        dealBtn.innerText='grab deal';
        dealBtn.className='line-btn';
        dealBtn.id='line-btn';

        const view = document.createElement('li');
        view.innerText='details';
        view.className='line-btn';
        view.id='line-btn2';
        

        const hotBtn = document.createElement('div');
        hotBtn.className='line-btns';
        hot1.appendChild(hotImg)
        hot1.appendChild(hotName)
        hot1.appendChild(hotPrice)
        hotBtn.appendChild(dealBtn)
        hotBtn.appendChild(view)
        hot1.appendChild(hotBtn)

        const hots2 = document.createElement('div');
        hots2.className = 'hots2';
    
    hots.appendChild(hot1)
    });
    
    document.body.appendChild(hots)
});

//cart btn and lokgic codes
cartBtn.addEventListener('click', () => {
    const cartBoard = document.createElement('div');
    cartBoard.className='cart-board';

    const cartHead=document.createElement('p');
    cartHead.className='pop-headings2';
    cartHead.innerText='my cart';

    const closeCart=document.createElement('span');
    closeCart.className='material-icons';
    closeCart.innerText='close';
    cartHead.appendChild(closeCart)
    closeCart.addEventListener('click',() =>{
        cartBoard.remove();
    })
    cartBoard.appendChild(cartHead)
    //cart content
    const cartContent = document.createElement('fieldset');
    cartContent.className='cart-content';
    const legend =document.createElement('legend')
    legend.className='legend';
    const now = new Date();
    const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    legend.innerHTML = `cart at ${dateStr}`;
    cartContent.appendChild(legend)

    //cart logic
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Render cart items
    if (cart.length === 0) {
        cartContent.innerHTML += '<div style="padding:1em;color:gray;">Cart is empty.</div>';
    } else {
        let total = 0;
        cart.forEach((item, idx) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const img = document.createElement('img');
            img.src = item.img;
            img.className = 'image-item';
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.objectFit = 'cover';
            img.style.marginRight = '8px';

            const name = document.createElement('span');
            name.innerText = item.name;
            name.style.marginRight = '8px';

            const price = document.createElement('span');
            price.innerText = item.price;
            price.style.marginRight = '8px';


            const delBtn = document.createElement('button');
            delBtn.innerText = 'delete';
            delBtn.className = 'delete-btn';
            delBtn.style.marginLeft = '8px';
            delBtn.addEventListener('click', () => {
                cart.splice(idx, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                cartBoard.remove();
                cartBtn.click();
            });

            cartItem.appendChild(img);
            cartItem.appendChild(name);
            cartItem.appendChild(price);
            cartItem.appendChild(delBtn);

            cartContent.appendChild(cartItem);
        });

        // Total amount
        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-total';
        totalDiv.style.marginTop = '1em';
        totalDiv.style.fontWeight = 'bold';
        totalDiv.innerText = 'Total: UGX ' + total;
        cartContent.appendChild(totalDiv);
    }

    // Add "buy now" button
    const buyNowBtn = document.createElement('button');
    buyNowBtn.className = 'buy-now-btn';
    buyNowBtn.innerText = 'buy now';
    buyNowBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            cartBoard.style.backgroundColor = 'red';
            setTimeout(() => {
                cartBoard.style.backgroundColor = '';
            }, 1000);
        } else {
                       
        }
    });  
    cartContent.appendChild(buyNowBtn);


    // Add to cart logic for all "add to cart" buttons
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.onclick = function () {
            // Find the item info from the DOM
            const itemDiv = btn.closest('.item');
            if (!itemDiv) return;
            const name = itemDiv.querySelector('.item-name')?.innerText || itemDiv.querySelector('.name')?.innerText || '';
            const price = itemDiv.querySelector('.item-price')?.innerText || '';
            const img = itemDiv.querySelector('img')?.src || '';
            // Prevent duplicates
            if (!cart.some(i => i.name === name && i.price === price)) {
                cart.push({ name, price, img });
                localStorage.setItem('cart', JSON.stringify(cart));
                btn.innerText = 'added!';
                setTimeout(() => { btn.innerText = '+ cart'; }, 1000);
            }
        };
    });



    cartBoard.appendChild(cartContent)


    document.body.appendChild(cartBoard)
});

//profile
profileBtn.addEventListener('click', () => {
    const profileBoard = document.createElement('div');
    profileBoard.className='cart-board';

    const cartHead=document.createElement('p');
    cartHead.className='pop-headings2';
    cartHead.innerText='my profile';

    const closeCart=document.createElement('span');
    closeCart.className='material-icons';
    closeCart.innerText='close';
    cartHead.appendChild(closeCart)
    closeCart.addEventListener('click',() =>{
        profileBoard.remove();
    })
    profileBoard.appendChild(cartHead)

    const profileImage = document.createElement('img');
    profileImage.className='circular-images';
    profileImage.src='ff.png';
    profileImage.alt='profile';

    const profileContent = document.createElement('fieldset');
    profileContent.className='cart-content';
    const legend =document.createElement('legend')
    legend.className='legend';
    legend.innerHTML=`my email`;
    profileContent.innerText='example@gmail.com';
    profileContent.contentEditable=true;
    profileContent.appendChild(legend)

    const profilePhone = document.createElement('fieldset');
    profilePhone.className='cart-content';
    const legend2 =document.createElement('legend')
    legend2.className='legend';
    legend2.innerHTML=`phone number`;
    profilePhone.innerText='+(code) 744759181';
    profilePhone.contentEditable=true;
    profilePhone.appendChild(legend2)

    const profileBio = document.createElement('fieldset');
    profileBio.className='cart-content';
    const legend3 =document.createElement('legend')
    legend3.className='legend';
    legend3.innerHTML=`my bio`;
    profileBio.innerHTML='i am example '+'<br>' + 'a full-stack web and app developer,crafting beautiful systems in various programming languags.' + '<br><br>' + 'contact me;' + '+256-765-003-100';
    profileBio.contentEditable=true;
    profileBio.appendChild(legend3)

    const save = document.createElement('button');
    save.className='save-changes';
    save.innerText='save changes';
    

    profileBoard.appendChild(profileImage)
    profileBoard.appendChild(profileContent)
    profileBoard.appendChild(profilePhone)
    profileBoard.appendChild(profileBio)
    profileBoard.appendChild(save)

    document.body.appendChild(profileBoard)
});


