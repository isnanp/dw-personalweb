    function formAlert() {
        let projectName = document.getElementById("inputProject").value;
        let date1 = document.getElementById("date1").value;
        let date2 = document.getElementById("date2").value;
        let desc = document.getElementById("desc").value;

        if (projectName == "") {
            return alert("Nama harus diisi dong");
        } else if (date1 == "") {
            return alert("Tanggal mulainya harus diisi dong");
        } else if (date2 == "") {
            return alert("Tanggal selesainya harus diisi dong");
        } else if (desc == "") {
            return alert("Deskripsinuya jangan lupa diisi juga ya");
        } 
    }
      
  
    let dataProject = [];

    function addProject(event) {
            event.preventDefault();
            let projectName = document.getElementById("inputProject").value;
            let desc = document.getElementById("desc").value;
            let images = document.getElementById("inputImg").files;
            
            function timeDistance() {
                let date1 = new Date(document.getElementById("date1").value);
                let date2 = new Date(document.getElementById("date2").value); 
                let diff = new Date(date2) - new Date(date1);
                let days = Math.floor(diff / (1000 * 3600 * 24));
                let weeks = Math.floor(diff / (1000 * 3600 * 24 * 7))
                let months = Math.floor(diff / (1000 * 3600 * 24 * 30)); 
                let years = Math.floor(diff / (1000 * 3600 * 24 * 30 * 12));  
 
                if (years == 1) {
                    return `${years} year`
                } else if (years > 0) {
                    return `${years} years`  
                } else if ( months == 1) {
                    return `${months} month`
                } else if (months > 0) {
                    return `${months} months`
                } else if (weeks == 1) {
                    return `${weeks} week`
                } else if (weeks > 0) {
                    return `${weeks} weeks`
                } else if (days == 1) {
                    return `${days} day` 
                } else if (days > 0) { 
                    return `${days} days`
                }
            }

            let difference = timeDistance()

            const nodeIcon = `<i class="fa-brands fa-node-js"></i>`;
            const goIcon = `<i class="fa-brands fa-golang"></i>`;
            const reactIcon = `<i class="fa-brands fa-react"></i>`;
            const javaIcon = `<i class="fa-brands fa-java"></i>`; 

            let nodeDet = document.getElementById("nodeJs").checked ? nodeIcon : "";
            let GoDet = document.getElementById("Go").checked ? goIcon : "";
            let reactDet = document.getElementById("reactJs").checked ? reactIcon : "";
            let javaDet = document.getElementById("java").checked ? javaIcon : ""; 
 
            images = URL.createObjectURL(images[0]);
            console.log(images);

            let projectPreview = { 
                projectName,
                difference,
                desc, 
                nodeDet,
                GoDet,
                reactDet,
                javaDet,
                images,
            };

            dataProject.push(projectPreview);
            pushProject()
        
    }

    function pushProject() {
        document.getElementById("contents").innerHTML = "";

        for (let i = 0; i < dataProject.length; i++) { 
            document.getElementById("contents").innerHTML += `
            
             <div class="item-grid">
                <img src="${dataProject[i].images}" alt="gambarblok">
                <h3>${dataProject[i].projectName}</h3>
                <h5>durasi : ${dataProject[i].difference} </h5>
                    <div class="previewInfo">
                    <p>${dataProject[i].desc}</p>
                    <div class="previewTech">
                        ${dataProject[i].nodeDet} 
                        ${dataProject[i].GoDet} 
                        ${dataProject[i].reactDet}
                        ${dataProject[i].javaDet}
                    </div>
                        <div class="itemBtn">
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </div>
            </div>
            `
        }
    }

