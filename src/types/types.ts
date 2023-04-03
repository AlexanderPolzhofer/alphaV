export interface TopicsData {
  relevance_score: string;
  topic: string;
}

export interface TickerSentimentData {
  ticker: string;
  relevance_score: string;
  ticker_sentiment_score: string;
  ticker_sentiment_label: string;
}

export interface FeedData {
  authors: string[];
  banner_image: string;
  category_within_source: string;
  overall_sentiment_label: string;
  overall_sentiment_score: number;
  source: string;
  source_domain: string;
  summary: string;
  ticker_sentiment: TickerSentimentData[];
  time_published: string;
  title: string;
  topics: TopicsData[];
  url: string;
}

export interface CardNewsData {
  feed: FeedData[];
  items: string;
  relevance_score_definition: string;
  sentiment_score_definition: string;
}

export interface NewsProps {
  data?: CardNewsData;
  handleTickerItemsClick: (data: TickerSentimentData[]) => void;
}

export interface CardProps {
  data: FeedData;
  handleTickerItemsClick: (data: TickerSentimentData[]) => void;
}

export interface TickerItemsProps {
  tickerItems: TickerSentimentData[] | undefined;
}
export interface TickerItemProps {
  tickerItem: TickerSentimentData;
}