var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node Mailer' });
});

router.post('/',function(req,res){
       var oldurl = req.body.mail1;
       var messege = req.body.text;
       //console.log(oldurl);
       //res.send();
       //console.log(messege);
      var transporter = nodemailer.createTransport({

              host : 'smtp-pulse.com',
              port : 465,                          // 2525 if SSL is false
              secure :true,
              auth : {
                    user : 'skmishra.nitdgp@gmail.com',
                    pass : 'CBgGDtsNYa6oq'
              }
      });


      var mailOption = {
          from : 'skmishra.nitdgp@gmail.com',
            to : oldurl,
        subject: 'This is NodeJS Mailer',
           text: messege,
      }

    transporter.sendMail(mailOption, function(err,data){
               if(err){
                 //console.log(err);
                 res.send('Error in sending E-mail');
               }
               else {
                 //console.log('Email Sent');
                 res.send('Your E-mail has been sent successfully.');
               }

      })

      // transporter.verify(function(error, success){
      //   if(error){
      //     console.log(error);
      //   } else{
      //     console.log('Server is ready to take our messeges');
      //   }
      // });

});

module.exports = router;
