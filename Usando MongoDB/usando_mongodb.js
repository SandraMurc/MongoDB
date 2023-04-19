//Consigue todos los estudiantes
db.student.find().pretty()

//Consigue todos los estudiantes que son de California o Washington
db.student.find({$or:[{state:'California'},{state:'Washington'}]}).pretty()

//Consigue todos los estudiantes cuyo número de la suerte sea mayor que 3
db.student.find({lucky_number: {$gt:3}}).pretty()

//Consigue todos los estudiantes cuyo número de la suerte sea igual o mayor a 10
db.student.find({lucky_number: {$lt:10}}).pretty()

//Obten todos los estudiantes cuyo número de la suerte esté entre 1 y 9 (inclusive)
db.student.find({$and:[{lucky_number: {$gt:1}},{lucky_number: {$lte:9}}]}).pretty()

//Agrega un campo a cada colección de estudiantes llamado 'intereses' que es un ARRAY. 
//Debe contener las siguientes entradas: 'codificación', 'brunch', 'MongoDB'. 
//Haz esto en UNA operación.
db.student.update({}, {$set: {intereses: ['codificación','brunch','MongoDB']}}, false, true)

//Agrega algunos intereses únicos para cada estudiante en particular 
//en cada una de sus matrices de intereses.
db.student.update({name:'Esteban'},{$push:{intereses: 'Botánica'}})
db.student.update({name:'Julieta'},{$push:{intereses: 'Diseño'}})
db.student.update({name:'Estefanía'},{$push:{intereses: 'Repostería'}})
db.student.update({name:'Pedro'},{$push:{intereses: 'Literatura'}})
db.student.update({name:'Isabel'},{$push:{intereses: 'Matemática'}})

//Agrega los 'impuestos' de intereses a la matriz de intereses de alguien.
db.student.update({name:'Estefanía'},{$push:{intereses: 'Tax'}})

//Elimina los intereses de 'impuestos' que acaba de agregar.
db.student.update({name:'Estefanía'},{$pull:{intereses: 'Tax'}})

//Eliminar a todos los estudiantes que son de California.
db.student.remove({state:'California'})

//Eliminar a un alumno por su nombre.
db.student.remove({name:'Pedro'})

//Retira a un estudiante cuyo número de la suerte sea mayor que 5 (SOLO UNO)
db.student.remove({lucky_number:{$gt:5}},true)

//Agrega un campo a cada colección de estudiantes llamado 'number_of_belts' y configúralo en 0.
db.student.update({}, {$set: {number_of_belts:0}}, false, true)

//Incrementa este campo en 1 para todos los estudiantes en Washington (Seattle Dojo).
db.student.update({state:'Washington'}, {$inc: {number_of_belts:1}}, false, true)

//Cambia el nombre del campo 'number_of_belts' a 'belts_earned'
db.student.update({},{$rename:{'number_of_belts': 'belts_earned'}},false,true)

//Elimina el campo 'lucky_number'.
db.student.update({},{$unset:{lucky_number: ''}},false,true)

//Agrega un campo 'updated_on' y establece el valor como la fecha actual.
db.student.update({},{$currentDate:{updated_on: true}},false,true)
