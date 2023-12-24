// ReviewsSection.tsx
import ReviewCard from './rating';

const reviewsData = [
  {
    name: 'Rionggo Rahardi',
    location: 'Kulonprogo, Jawa Tengah',
    userImage: '/assets/images/profile-picture/profile-rionggo.webp',
    review: 'Situs web resep masakan Indonesia ini luar biasa! Resepnya mudah diikuti dan enak.'
  },
  {
    name: 'Ferry Salim',
    location: 'Jakarta, Indonesia',
    userImage: '/assets/images/profile-picture/profile-ferr.webp',
    review: 'Saya suka situs web ini! Resepnya mudah diikuti dan enak.'
  },
  {
    name: 'Rizki Dwi Kurniawan',
    location: 'Jakarta, Indonesia',
    userImage: '/assets/images/profile-picture/profile-rizki.webp',
    review: 'Ini adalah situs web resep masakan Indonesia terbaik yang pernah saya kunjungi! Resepnya mudah diikuti dan enak.'
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Ulasan Pengunjung</h2>
      {reviewsData.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewsSection;
