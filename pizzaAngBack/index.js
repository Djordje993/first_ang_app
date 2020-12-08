let express= require('express');
let cors= require('cors');
let session= require('express-session');
let bodyParser= require('body-parser');
let nodemailer= require('nodemailer');
let mysql= require('mysql');
let port= 3000;

let app= express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'Neka-tajna',
    resave: false,
    saveUninitialized: false
}));

let transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'epicpizzatest@gmail.com',
        pass:'*'
    }
});

let con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*',
    database: 'pizza_ang'
});
con.connect(function(err){
    if(err){throw err}
    console.log('Uspesno konektovan na  bazu');
});

//---------------------------------------

app.post('/login',function(req,res){
    let user=req.body.username;
    let pass=req.body.password;
    console.log(req.session)
    con.query(`SELECT 
                usr_id,
                usr_username,
                usr_email,
                usr_adress 
                FROM user WHERE 
                usr_username=? AND usr_password=?`,
        [user,pass],
        function(err,resault,fields){
            if(err){throw err}
            if(resault.length>0){
                res.json({data: resault[0]});
            }
            else{
                res.json({error:'incorrect input'});
            }
        });
});

app.post('/signup',function(req,res){
    let user=req.body.username;
    let pass=req.body.password;
    let email=req.body.email;
    let adress=req.body.adress;
    con.query(`INSERT INTO user
                (usr_username, usr_password, usr_email, usr_adress) 
                VALUES (?,?,?,?)`,
                [user,pass,email,adress],
        function(err,resault,fields){
            if(err){throw err;}
            res.json('Success!')
        });
});

app.get('/pizzasData',function(req,res){
    let dataToSend=[]
    con.query(`SELECT * FROM pizza_data`,
        function(err,resault,fields){
            if(err){throw err;}
            dataToSend=resault
            for(let i=0; i<dataToSend.length; i++){
                con.query(`SELECT 
                    top_name
                    FROM pid_top pt
                    JOIN topping t 
                    ON t.top_id=pt.top_id
                    WHERE pt.pid_id=?`,
                    [dataToSend[i].pid_id],
                    function(err,resault,fields){
                        if(err){throw err;}
                        dataToSend[i].toppings=[];
                        for(let j=0; j<resault.length; j++){
                            dataToSend[i].toppings.push(resault[j].top_name);
                        }
                        if(i===dataToSend.length-1){
                            res.json(dataToSend);
                        }
                    });
            }
        });
});

app.post('/sendorder', function(req,res){
    pizzas= req.body.pizzas;
    fullPrice= req.body.fullPrice;
    email= req.body.email;

    let textToSend=" You have Ordered Following pizzas:\n";
    for(let i=0; i<pizzas.length; i++){
        textToSend+="\t"+pizzas[i]+" \n";
    }
    textToSend+=" which will cost you "+fullPrice+" euros.";

    let mailOptions={
        from:'epicpizzatest@gmail.com',
        to:email,
        subject:'Your Pizza Order',
        text: textToSend
    }

    transporter.sendMail(mailOptions, function(error,info){
        if(error){throw error}
        console.log(info);
    });

    res.json('Success');
});

//---------------------------------------

app.listen(port, function(){
    console.log('Slusa na portu '+port);
});