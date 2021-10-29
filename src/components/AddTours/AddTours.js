import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTours.css'
const AddTours = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/tours', data)
        .then(res =>{
        if(res.data.insertedId){
            alert('Successfully Added')
            reset()
        }
        })
    } 
    return (
        <div className="AddTours">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Tour Name"/>
      <textarea {...register("description")} placeholder="description"/>
      <input {...register("img")} placeholder="Image Url"/>
      <input {...register("number")} placeholder="Price"/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddTours;



// "https://i.ibb.co/s5PpJ5z/amsterdam.jpg" 
//Amsterdam - Netherlands
//Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age.

// "https://i.ibb.co/pL9rnbD/Ayasofya.jpg" 
//Hagia sophia - Turkey
//Hagia Sophia, officially the Holy Hagia Sophia Grand Mosque, and formerly the Church of Hagia Sophia, is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus

// "https://i.ibb.co/k9NPnxg/cox-bazar.jpg"
//Cox's Bazar - Bangladesh
//Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.

// "https://i.ibb.co/PTz7VzX/egypt.jpg" 
//Pyramid - egypt
//A pyramid is a structure whose outer surfaces are triangular and converge to a single step at the top, making the shape roughly a pyramid in the geometric sense. The base of a pyramid can be trilateral, quadrilateral, or of any polygon shape.

// "https://i.ibb.co/1d5ZnbL/eiffel-tower.jpg" 
//Eiffel Tower - Paris
//The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.

// "https://i.ibb.co/SPjXxHC/niagra.jpg"
//Niagara Falls - Usa
//Niagara Falls is a city on the Niagara River, in New York State. It’s known for the vast Niagara Falls, which straddle the Canadian border. In Niagara Falls State Park, the Observation Tower, at Prospect Point, juts out over Niagara Gorge for a view of all 3 waterfalls.

// "https://i.ibb.co/8sK7Q4Q/Taj-mahal.jpg" 
//Banglar Taj Mahal - India
//Taj Mahal Bangladesh is a full-scale copy of the original Taj Mahal located 16 kilometres east of the Bangladeshi capital, Dhaka in Sonargaon. Unlike the original, work on the building took only five years

// "https://i.ibb.co/tLNWjqB/tower-bridge.jpg" 
// Tower Bridge - London
//Tower Bridge is a Grade I listed combined bascule and suspension bridge in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry