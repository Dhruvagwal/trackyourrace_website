export interface CommunityGroup {
  title: string;
  subtitle: string;
  description: string;
  ctaBtnTitle: string;
  trendingDiscussions: string[];
  imgSrc: string;
  expansion?: string;
}
export interface TraningPlans {
  title: string;
  description: string;
  imgSrc: string;
}

export interface TrainingVideo {
  thumbnail: string;
  src: string;
}

export interface TraningPlanVideos {
  title: string;
  videos: TrainingVideo[]
}

export interface HeroSectionProps {
  title: string;
  description: string;
  bgImage: string;
  ctaFilledContent: string;
  ctaOutlineContent: string;
}

