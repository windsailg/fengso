
        // var pro_title = document.querySelector("meta[property='og:title']").getAttribute('content');
        // var pro_Img = document.querySelector("#course_image").getAttribute('src');
        // var pro_desc = document.querySelector("meta[property='og:description']").getAttribute('content');
        // var pro_price = document.querySelector("#coursePrice").innerHTML;
        // var location_url = location.href;
    
        var WebSiteModel = {
                "@context": "http://schema.org",                                           
                "@type": "WebSite",                                                        
                "url": "https://www.fengso.com.tw/",
                "potentialAction":{                                                                              
                    "@type": "SearchAction",                                                
                    "target": "",        
                    "query-input": "required name=search_term"                              
                }                                                     
            };
            
        var CorporationModel = {
                "@context": "http://schema.org",             
                "@type": "Corporation",                      
                "name": "Fengso 峰碩資訊",                              
                "description": "峰碩資訊學院提供最優值的各式課程；在職進修|終生學習|網路行銷|數位行銷|簡報技巧|簡報設計|溝通技巧|程式設計等各式雲端線上及面授課程資訊，滿足你的求知慾望",      
                "logo":"https://www.fengso.com.tw/fengso/img/main_sprites.png",                           
                "url":"https://www.fengso.com.tw/",                      
                "brand":{                                              
                    "@type": "Brand",                      
                    "name": "Fengso 峰碩資訊"                         
                }                                                                                
            };
    

        //append the json onheader 
        var CorporationScript = document.createElement('script')
            CorporationScript.type = "application/ld+json";
            CorporationScript.innerHTML = JSON.stringify(CorporationModel) ;
            document.getElementsByTagName('head')[0].appendChild(CorporationScript); 

        // var WebSiteScript  = document.createElement('script'),
        //     WebSiteScript.type = "application/ld+json";
        //     WebSiteScript.innerHTML = JSON.stringify(WebSiteModel) ;
        //     document.getElementsByTagName('head')[0].appendChild(WebSiteScript); 
