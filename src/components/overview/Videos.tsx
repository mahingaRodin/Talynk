import { useRef, useState, useEffect } from 'react';
import video from '../../assets/video.mp4';
import pic from '../../assets/lanez.jpg';
import CustomButton from './customButton';
import { Play } from 'lucide-react';

const postsData = [
  {
    id: 1,
    author: {
      name: "John Smith",
      avatar: pic
    },
    timeAgo: "2 days ago",
    videoSrc: video,
    thumbnail: pic
  },
  {
    id: 2,
    author: {
      name: "Sarah Johnson",
      avatar: pic
    },
    timeAgo: "1 day ago",
    videoSrc: video,
    thumbnail: pic
  },
  {
    id: 3,
    author: {
      name: "Mike Wilson",
      avatar: pic
    },
    timeAgo: "5 hours ago",
    videoSrc: video,
    thumbnail: pic
  }
];

const SocialPost = ({ post }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const PREVIEW_DURATION = 300; // 5 minutes in seconds

  useEffect(() => {
    const video = videoRef.current;
    
    const handleTimeUpdate = () => {
      if (video.currentTime >= PREVIEW_DURATION) {
        video.currentTime = 0; // Reset to start when preview duration is reached
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="w-80 min-w-80 mx-4 first:ml-0 last:mr-0">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative">
          {/* Dark gradient overlay for header */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent z-10" />
          
          {/* Header content */}
          <div className="absolute top-0 left-0 right-0 px-4 py-2 flex justify-between items-center z-20">
            <div className="flex items-center space-x-2">
              <img 
                src={post.author.avatar} 
                alt="" 
                className="w-8 h-8 rounded-full border border-white/30"
              />
              <span className="text-white font-medium">{post.author.name}</span>
            </div>
            <span className="text-white/80 text-sm">{post.timeAgo}</span>
          </div>

          {/* Video Container */}
          <div className="relative">
            <video 
              ref={videoRef}
              src={post.videoSrc}
              className="w-full h-48 object-cover"
              poster={post.thumbnail}
              controls={isPlaying}
              preload="metadata"
            />
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex pt-2 gap-9">
          <CustomButton
            text="Discard"
            bgColor="#44454A"
            textColor="white"
            border="none"
          />
          <CustomButton
            text="Approve"
            bgColor="#006FFD"
            textColor="white"
            border="none"
          />
        </div>
      </div>
    </div>
  );
};

const SocialFeed = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap p-4">
        {postsData.map(post => (
          <SocialPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;