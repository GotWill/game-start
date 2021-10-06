const App = {
    init(){
        this.controollers.createComponents()

        this.controollers.renderCards()
        this.controollers.createPopup()

   
    },
    state: {
        cards: [
            {
            id: 1, 
            name: "Spider Man",
            price: 130,
            img: "https://t.ctcdn.com.br/eFWx3D0Tz5cmNvX6Hqa13o8wdmk=/512x288/smart/i501189.png"
        },
        {
            id: 2,
            name: "God War",
            img: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/143881-games-review-review-god-of-war-screens-image1-hcyb5z2mg0.jpg"
        },
        {
            id: 3,
            name: "The wicther",
            img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/21/08/20/21/25/1318675.jpg",
            price: 150,
        },
        {
            id: 4,
            name: "Fifa 2020",
            img: "https://s2.glbimg.com/f5UpJFXD2wQR3-HMNa927HxTd7c=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/r/7/mSrPjAQTq0uFHNHiBjpQ/fifa-21-intros.jpg",
            price: 150,
        },
        {
            id: 5,
            name: "Gta",
            img: "https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
            price: 150,
        },
      
        ],
        myCards: []
    },
    controollers: {
        buyFlow(card){
            App.state.myCards.push(card);

            const arr = App.state.cards.filter((p)=>{
                // console.log("[p]...", card.id, p.id !== card.id,p)
                return p.id !== card.id
            })

            App.state.cards = arr

            App.controollers.renderCards()
            App.controollers.renderMyCards()
            App.controollers.hiddenPopup()

        },
        showPupup(body){

         

            const el = App.elements.popup.backdrop
            el.style.display = "grid"
            // const clear = App.controollers.createPopup("")
            App.elements.popup.container.body.innerHTML = ""
            App.elements.popup.container.body.appendChild( body)
            

        },
        sellflow(card){

            const arr = App.state.myCards.filter((p)=>{
                console.log("[p]...", card.id, p.id !== card.id,p)
                return p.id !== card.id
            })


            // App.state.myCards = arr
             App.state.myCards = arr
            App.state.myCards.push(cards)

            
            App.controollers.renderCards()
            App.controollers.renderMyCards()
            App.controollers.hiddenPopup()

        },
        hiddenPopup(){

            const el = App.elements.popup.backdrop

            el.style.display = "none"


        },
        createPopup(){
            const el = App.elements.popup


            App.helpers.style(el.backdrop,{ 
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%", 
                height: "100%",
                // background: "gray",
                display: "none",
               placeItems: "center"
            })

            // App.elements.body.container.all.innerHTML = ""
            
            App.helpers.style(el.container.el,{
                width: "300px",
                height: "300px",
                background: "white",
                color: "black", 
                border: "1px solid black"
            })

            App.helpers.style(el.container.close.el,{
            //  border: "1px solid black",
             display: "flex",
             justifyContent: "flex-end",
             padding: "10px",
            })

            App.helpers.style(el.container.close.btnClose,{
                cursor: "pointer",
                color: "black"
        })

        el.container.close.btnClose.onclick = () =>{
            console.log("cliquei")
            App.controollers.hiddenPopup()
        }

        // el.backdrop.onclick  = (evt) =>{
        //     console.log("backdrop")
        //     if(evt.target === el.backdrop){
        //         App.controollers.hiddenPopup()
        //     }
        // }

            el.container.close.btnClose.innerHTML = "X"
            el.container.close.el.appendChild(el.container.close.btnClose)
            el.container.close.el.appendChild(el.container.body)

            el.container.el.appendChild(el.container.close.el)
            el.backdrop.appendChild(el.container.el)
            App.elements.app.appendChild(el.backdrop)
        },
        createCardContent(card, isBuy){

            const el = document.createElement("div")

            const img = document.createElement("img")
            img.innerHTML = card.img
            const srcImg = card.img
            img.src = srcImg

            // App.helpers.style(img, {width: "200px"})

            const divCenter = document.createElement("div")
            const name = document.createElement("h2")
            name.innerHTML = card.name

            const price = document.createElement("p")
            price.innerHTML = card.price

            const divFinal = document.createElement("div")
            const btn = document.createElement("button")

            App.helpers.style(el,{
                marginTop: "30px"

            } )

            App.helpers.style(img, {
                width: " 270px"
            })
           
            App.helpers.style(btn,{
                padding:"15px", 
                borderRadius: "20px",
                background: "#4763ff",
                color: "#FFFFFF",
                border: "3px solid #737380",
                boxShadow: "3px 3px red, 0.4em 0 04.1em ",
                cursor: "pointer"


            })

            App.helpers.style( divFinal,{
                display: "flex",
                justifyContent: "center"
            })
            
            App.helpers.style( divCenter,{ 
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            })

            btn.innerHTML = isBuy ? "Comprar" : "vender" 
            btn.onclick = () => {
                console.log("btnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", card, isBuy )
               if(isBuy){

             App.controollers.buyFlow(card)
            }else{
                App.controollers.buyFlow(card)
            }

            }

            el.appendChild(img)
            el.appendChild(divCenter)
            divCenter.appendChild(name)
            divCenter.appendChild(price)
            el.appendChild(divFinal)
            divFinal.appendChild(btn)

            return el

        },
        createCards(card, isBuy){
            const el = document.createElement("div")

            const img = document.createElement("img")
            img.innerHTML = card.img
            const srcImg = card.img
            img.src = srcImg

            // App.helpers.style(img, {width: "200px"})

            const divCenter = document.createElement("div")
            const name = document.createElement("h2")
            name.innerHTML = card.name

            const price = document.createElement("p")
            price.innerHTML = card.price

            const divFinal = document.createElement("div")
            const btn = document.createElement("button")

            el.appendChild(img)
            el.appendChild(divCenter)
            divCenter.appendChild(name)
            divCenter.appendChild(price)
            el.appendChild(divFinal)
            divFinal.appendChild(btn)

            btn.innerHTML = isBuy? "Comprar" : "Vender"
            
             App.helpers.style(el,{
                 width: "270px",
                 height: "270px",
                 background: "#202024",
                 border: "3px solid #737380",
                textAlign: "center",
                margin: "10px", 
                fontFamily:  "fantasy",
                marginTop: "30px",
                boxShadow: "3px 3px  8px 5px aliceblue"

             } )

             App.helpers.style(img, {
                 width: " 270px"
             })
            
             App.helpers.style(btn,{
                 padding:"15px", 
                 borderRadius: "20px",
                 background: "#4763ff",
                 color: "#FFFFFF",
                 border: "3px solid #737380",
                 boxShadow: "3px 3px red, 0.4em 0 04.1em ",
                 cursor: "pointer"


             })


             App.helpers.style( divFinal,{
                 display: "flex",
                 justifyContent: "center"
             })

             btn.onclick = () => {
                 const content = App.controollers.createCardContent(card, isBuy)
                //  console.log(content.outerHTML)
                    
                    console.log("homeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

                 App.controollers.showPupup(content)
               
             }


            return el
        },
        renderCards(){
            const aux = App.elements
            
            aux.body.container.all.innerHTML = ""
            aux.body.container.allCards = []
            for(let i = 0; i < App.state.cards.length; i++){
                const  card = App.state.cards[i] 
                // console.log(card)

                const el = this.createCards(card, true)
                // console.log(el)

                aux.body.container.all.appendChild(el)
                aux.body.container.allCards.push(el)
            }
        },
        renderMyCards(){
            const aux = App.elements
            
            aux.body.container.onw.innerHTML = ""
            // aux.body.container.allOnw = []
            for(let i = 0; i < App.state.myCards.length; i++){
                const  card = App.state.myCards[i] 
                // console.log(card)

                const el = this.createCards(card, false)
                // console.log(el)

                aux.body.container.onw.appendChild(el)
                aux.body.container.allOnw.push(el)
            }

        },
        createHeader(){

            const aux = App.elements

            App.helpers.style(aux.header.elemenHeader,{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#1E1651"
            })

            aux.header.leftHeader.title.innerHTML = "Game Start"
            App.helpers.style(aux.header.leftHeader.title,{
                fontSize: "32px",
                fontFamily: "monospace",
                margin: "4px"
            })

            aux.header.rightHeader.coracao.src = "https://icon-library.com/images/white-heart-icon/white-heart-icon-4.jpg"
            App.helpers.style(aux.header.rightHeader.coracao,{
                width: "52px",
                margin: "5px"
            })

        

        },

        createFoother(){
            const aux = App.elements.foother

            App.helpers.style(aux.elemenFoother,{
                background: "#41377D",
                padding: "15px",
                display: "flex",
                justifyContent: "center"
            })

            aux.center.face.src = "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            App.helpers.style(  aux.center.face, {
                width: "42px",
                margin: "5px"

            })

            aux.center.insta.src = "https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg"
            App.helpers.style( aux.center.insta, {
                width: "42px",
                margin: "5px"

            })

            aux.center.twiter.src = "https://cdn-icons-png.flaticon.com/512/124/124021.png"
            App.helpers.style( aux.center.twiter,{
                width: "42px",
                margin: "5px",
                borderRadius: "15px"
            })
        },
        createComponents(){
            const aux = App.elements

            App.helpers.style( aux.app,{
                display: "flex",
                flexDirection: "column",
                // height: "100vh",
                background: "#161A25",
                color: "white"
            } )

           
            aux.header.elemenHeader.appendChild(aux.header.leftHeader.elemenHeaderLefht)
            aux.header.elemenHeader.appendChild(aux.header.rightHeader.elemenHeaderRight)
            aux.header.leftHeader.elemenHeaderLefht.appendChild(aux.header.leftHeader.title)
            aux.header.rightHeader.elemenHeaderRight.appendChild(aux.header.rightHeader.coracao)
            aux.header.rightHeader.elemenHeaderRight.appendChild(aux.header.rightHeader.carrinho)
            aux.header.rightHeader.elemenHeaderRight.appendChild(aux.header.rightHeader.avatar)         
            aux.app.appendChild(aux.header.elemenHeader)
            this.createHeader()




       
 
            
         

       
            App.helpers.style(aux.body.elemenBody,{
                display: "flex",
                flexGrow: "1",
                // border: "1px solid red"
                
            })

            App.helpers.style(aux.body.container.el,{display: "flex", flexDirection: "column", width: "100%"})


            App.helpers.style( aux.body.container.all, { display: "flex", flexGrow: "1", flexWrap: "wrap", justifyContent: "center"})
            aux.body.container.all.innerHTML = "All"

            App.helpers.style(aux.body.container.onw,{display: "flex", flexGrow: "1", border: "1px solid red", height: "50vh", marginTop: "40px", flexWrap: "wrap"})
            aux.body.container.onw.innerHTML = "Tenho"


            aux.body.container.el.appendChild(aux.body.container.all)
            aux.body.container.el.appendChild(aux.body.container.onw)

            aux.body.elemenBody.appendChild(aux.body.container.el)
            aux.app.appendChild(aux.body.elemenBody)


           

            aux.foother.elemenFoother.appendChild(aux.foother.center.divCenter)
            aux.foother.center.divCenter.appendChild(aux.foother.center.insta)
            aux.foother.center.divCenter.appendChild(aux.foother.center.face)
            aux.foother.center.divCenter.appendChild(aux.foother.center.twiter)
            aux.app.appendChild(aux.foother.elemenFoother)

            this.createFoother()

        }
    },
    elements: {
        app: document.getElementById("App"),

      

        header: {
            elemenHeader: document.createElement("div"),

            leftHeader: {
                elemenHeaderLefht: document.createElement("div"),
                title: document.createElement("h1")
            },

            rightHeader: {
                elemenHeaderRight: document.createElement("div"),
                coracao: document.createElement("img"),
                carrinho: document.createElement("img"),
                avatar: document.createElement("img")


            }
        },

          body: {
            elemenBody: document.createElement("div"),
           
            container: {
                el: document.createElement("div"),
                all: document.createElement("div"),
                onw: document.createElement("div"),
                allCards: [],
                allOnw: []
    
            }
        },

        popup: {
            backdrop:document.createElement("div"),
            container: {
                el: document.createElement("div"),
                actions: document.createElement("div"),
                body: document.createElement("div"),
                close: {
                    el: document.createElement("div"),
                    btnClose: document.createElement("div")
                }
            },
       
        },

        

        foother: {
            elemenFoother: document.createElement("div"),

            center: {
                divCenter: document.createElement("div"),
                insta: document.createElement("img"),
                face: document.createElement("img"),
                twiter: document.createElement("img")
            }
        }
    },
    helpers: {

        style(el, rules) {
            for (let prop in rules) {
                // console.log("[CSS Rule]...", prop, rules[prop])
                el.style[prop] = rules[prop]
            }
        },
    }

}

App.init()