import React, { useState } from "react";
import { Star, ThumbsUp, Filter } from "lucide-react";

const ProductReviews = () => {
  const [selectedRating, setSelectedRating] = useState("all");

  // Sample review data
  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Perfect for daily use",
      comment:
        "This bag is exactly what I needed! The convertible straps make it so versatile, and the canvas material feels very durable. I've been using it daily for work and shopping.",
      helpful: 24,
      verified: true,
    },
    {
      id: 2,
      user: "Michael R.",
      rating: 4,
      date: "2024-01-10",
      title: "Great bag with minor issues",
      comment:
        "Overall a great product. The size is perfect and it looks stylish. The only reason for 4 stars is that the zipper can be a bit sticky sometimes.",
      helpful: 16,
      verified: true,
    },
    {
      id: 3,
      user: "Emily K.",
      rating: 5,
      date: "2024-01-05",
      title: "Exceeded expectations",
      comment:
        "The quality of this bag is outstanding! It's spacious enough for all my essentials plus a laptop. The design is minimalist yet functional.",
      helpful: 32,
      verified: true,
    },
  ];

  const stats = {
    average: 4.5,
    total: 127,
    distribution: {
      5: 75,
      4: 32,
      3: 12,
      2: 5,
      1: 3,
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-3">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Reviews Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">{stats.average}</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(stats.average) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">{stats.total} total ratings</p>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <button className="text-sm hover:underline" onClick={() => setSelectedRating(rating)}>
                {rating} star
              </button>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-yellow-400 rounded-full"
                  style={{ width: `${(stats.distribution[rating] / stats.total) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">{stats.distribution[rating]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filter Reviews
        </button>
        <select
          className="px-4 py-2 border rounded-full bg-white"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="all">All Stars</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              {review.verified && <span className="text-sm text-green-600">Verified Purchase</span>}
            </div>

            <h3 className="font-semibold mb-2">{review.title}</h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{review.user}</span>
              <span>•</span>
              <span>{new Date(review.date).toLocaleDateString()}</span>
            </div>

            <p className="text-gray-800 mb-4">{review.comment}</p>

            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ThumbsUp className="w-4 h-4" />
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      <div className="mt-8">
        <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;
