import TestimonialItem from "./TestimonialItem";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nadeen Khaled",
      image: "Nadeen.jpg",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 2,
      name: "Osama Magdy",
      image: "Osama.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 3,
      name: "Heba Ibrahim",
      image: "Heba.jpg",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 4,
      name: "Mahmoud Sabry",
      image: "Mahmoud.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
  ];
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <h2>What people say about us!</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
