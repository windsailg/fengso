
        // var pro_title = document.querySelector("meta[property='og:title']").getAttribute('content');
        // var pro_Img = document.querySelector("#course_image").getAttribute('src');
        // var pro_desc = document.querySelector("meta[property='og:description']").getAttribute('content');
        // var pro_price = document.querySelector("#coursePrice").innerHTML;
        // var location_url = location.href;
    
        var ProductModel = {
            "@context": "http://schema.org",
            "@type": "Product",
            "name": 'product_name',
            "image":  'https://www.fengso.com.tw/upload/fengso/aritcle/2019031508262321873.jpg',
            "description":  'product_description',
            "brand": {
                        "@type": "Organization",
                        "name":"峰碩資訊"
                        },
            "offers": {
                        "@type": "Offer",
                        "priceCurrency": "TWD",
                        "price": '1000 ',
                        },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 10,
                "ratingCount": 12,
                }
            };
    
        var BreadcrumbListModel = {
            "@context": "http://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [ { 
                    "@type": "ListItem", 
                    "position": "1", 
                    "item": { 
                        "@id": "https://www.fengso.com.tw/", 
                        "name": "首頁"
                    }}, { 
                    "@type": "ListItem", 
                    "position": "2", 
                    "item": { 
                        "@id": "https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&type=61", 
                        "name": "第二層名稱" 
                    }},{ 
                    "@type": "ListItem", 
                    "position": "3", 
                    "item": { 
                        "@id": "https://www.tkbgo.com.tw/product/toProductList.jsp?group=7&type=61&kind=119", 
                        "name": "第三層名稱" 
                    }},{ 
                    "@type": "ListItem", 
                    "position": "4", 
                    "item": { 
                        "@id": "https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1303390&subject_no=&class_type=I", 
                        "name": "本頁" 
                    }}
                ]
            };
    
            //console.log(product)
    
        //append the json onheader 
        var BreadCrumbScript = document.createElement('script'),
             ProductScript = document.createElement('script')
    
             BreadCrumbScript.type = "application/ld+json";
             ProductScript.type = "application/ld+json";
    
             BreadCrumbScript.innerHTML = JSON.stringify(BreadcrumbListModel);
             ProductScript.innerHTML = JSON.stringify(ProductModel) ;
             
            document.getElementsByTagName('head')[0].appendChild(BreadCrumbScript); 
            document.getElementsByTagName('head')[0].appendChild(ProductScript); 
