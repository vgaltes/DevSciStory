define(['server/server'], function(server) {

    describe('just checking', function() {


        it('works', function() {
            // just checking that _ works
            assert.equal(-1, [1,2,3].indexOf(5));
        });

    });

});


//       server.start(function(){
//           var request = http.get('http://localhost:8081');
//           request.on("response", function(response){
//               response.on("data", function(data)
//               {
//                   assert.equals('Hello World!', data);
//               });
//               response.on("end", function(){
//                   server.stop();
//               });
//           })
//       });