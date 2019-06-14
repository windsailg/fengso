
        // var pro_title = document.querySelector("meta[property='og:title']").getAttribute('content');
        // var pro_Img = document.querySelector("#course_image").getAttribute('src');
        // var pro_desc = document.querySelector("meta[property='og:description']").getAttribute('content');
        // var pro_price = document.querySelector("#coursePrice").innerHTML;
        // var location_url = location.href;
    
        var WebSiteModel = {
                "@context": "http://schema.org",                                           
                "@type": "WebSite",                                                        
                "url": "帶入峰碩網址",
                "potentialAction":{                                                                              
                    "@type": "SearchAction",                                                
                    "target": "https://www.asus.com/tw/search/results.aspx?SearchKey={search_term}",        
                    "query-input": "required name=search_term"                              
                }                                                                             
            };
            
        var CorporationModel = {
                "@context": "http://schema.org",             
                "@type": "Corporation",                      
                "name": "TKB峰碩",                              
                "description": "帶入TKB描述",      
                "logo":"帶入峰碩LOGO網址",                           
                "url":"帶入峰碩網址",                      
                "brand":{                                              
                    "@type": "Brand",                      
                    "name": "Fengso"                         
                }                                                                                
            };
    

        //append the json onheader 
        var CorporationScript = document.createElement('script')
             CorporationScript.type = "application/ld+json";
             CorporationScript.innerHTML = JSON.stringify(CorporationModel) ;
             document.getElementsByTagName('head')[0].appendChild(CorporationScript); 
