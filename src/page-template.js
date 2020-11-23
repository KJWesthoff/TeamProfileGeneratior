
// EmployeeCards
const renderTeamMembers = members => {
    const teamMemberHtmlArr = members.map(({name, id, email, role, ...duns})=>{
        
        // pick out the "special feature" (in this case there is only one.. so loop not done)
        let feature = Object.getOwnPropertyNames(duns)[0]
        

        return`
        <div class="col-sm">         
            <div class="card shadow p-3 mb-5 bg-primary rounded" style="width: 18rem; margin-top: 20px;">   
                <div class="card-body">
                    <h5 class="card-title text-white" style="padding: 20px 0 20px;" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${name}</li>
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">email: ${email}</li>   
                        <li class="list-group-item">${feature}: ${duns[feature]}</li> 
                    </ul>
                </div>
            </div>
        </div>
        `
    });
    return teamMemberHtmlArr.join()

}




const generatePage = (members) => {


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamChart</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    </head>
    <body>
    <!-- As a heading -->

    <header id = "headerbar">
        <nav class="navbar navbar-light bg-danger " style="height:100px">
            <span class="navbar-brand mb-0 h1" >Team Chart</span>
        </nav>
    </header>    



    <div class="container">
        <div class="row">
        
        ${renderTeamMembers(members)};


        </div>
    </div>




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>    
    </body>
    </html>
        



    `
  };


  module.exports = generatePage;