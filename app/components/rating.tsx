// ReviewCard.tsx
import Image from 'next/image';
import React from 'react';

interface ReviewCardProps {
  name: string;
  location: string;
  userImage: string; // You can use an actual image URL or an avatar placeholder
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, location, userImage, review }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-4">
      <div className="flex items-center mb-4">
        <Image src={userImage} alt={name} width={40} height={40} className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewCard;