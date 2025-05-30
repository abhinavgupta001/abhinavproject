export type IRedditData = {
    kind: string;
    data: {
      after: string;
      dist: number;
      modhash: string;
      geo_filter: string;
      children: Array<{
        kind: string;
        data: {
          approved_at_utc: any;
          subreddit: string;
          selftext: string;
          author_fullname: string;
          saved: boolean;
          mod_reason_title: any;
          gilded: number;
          clicked: boolean;
          title: string;
          link_flair_richtext: Array<any>;
          subreddit_name_prefixed: string;
          hidden: boolean;
          pwls: number;
          link_flair_css_class: any;
          downs: number;
          thumbnail_height: number;
          top_awarded_type: any;
          hide_score: boolean;
          name: string;
          quarantine: boolean;
          link_flair_text_color: string;
          upvote_ratio: number;
          author_flair_background_color: any;
          subreddit_type: string;
          ups: number;
          total_awards_received: number;
          media_embed: {};
          thumbnail_width: number;
          author_flair_template_id: any;
          is_original_content: boolean;
          user_reports: Array<any>;
          secure_media: any;
          is_reddit_media_domain: boolean;
          is_meta: boolean;
          category: any;
          secure_media_embed: {};
          link_flair_text: any;
          can_mod_post: boolean;
          score: number;
          approved_by: any;
          is_created_from_ads_ui: boolean;
          author_premium: boolean;
          thumbnail: string;
          edited: boolean;
          author_flair_css_class: any;
          author_flair_richtext: Array<any>;
          gildings: {};
          post_hint?: string;
          content_categories: any;
          is_self: boolean;
          mod_note: any;
          created: number;
          link_flair_type: string;
          wls: number;
          removed_by_category: any;
          banned_by: any;
          author_flair_type: string;
          domain: string;
          allow_live_comments: boolean;
          selftext_html?: string;
          likes: any;
          suggested_sort: any;
          banned_at_utc: any;
          url_overridden_by_dest: string;
          view_count: any;
          archived: boolean;
          no_follow: boolean;
          is_crosspostable: boolean;
          pinned: boolean;
          over_18: boolean;
          preview?: {
            images: Array<{
              source: {
                url: string;
                width: number;
                height: number;
              };
              resolutions: Array<{
                url: string;
                width: number;
                height: number;
              }>;
              variants: {};
              id: string;
            }>;
            enabled: boolean;
          };
          all_awardings: Array<any>;
          awarders: Array<any>;
          media_only: boolean;
          can_gild: boolean;
          spoiler: boolean;
          locked: boolean;
          author_flair_text: any;
          treatment_tags: Array<any>;
          visited: boolean;
          removed_by: any;
          num_reports: any;
          distinguished: any;
          subreddit_id: string;
          author_is_blocked: boolean;
          mod_reason_by: any;
          removal_reason: any;
          link_flair_background_color: string;
          id: string;
          is_robot_indexable: boolean;
          report_reasons: any;
          author: string;
          discussion_type: any;
          num_comments: number;
          send_replies: boolean;
          whitelist_status: string;
          contest_mode: boolean;
          mod_reports: Array<any>;
          author_patreon_flair: boolean;
          author_flair_text_color: any;
          permalink: string;
          parent_whitelist_status: string;
          stickied: boolean;
          url: string;
          subreddit_subscribers: number;
          created_utc: number;
          num_crossposts: number;
          media: any;
          is_video: boolean;
          is_gallery?: boolean;
          media_metadata?: {
            [key: string]: {
              status: string;
              e: string;
              m: string;
              p: Array<{
                y: number;
                x: number;
                u: string;
              }>;
              s: {
                y: number;
                x: number;
                u: string;
              };
              id: string;
            };
          };
          gallery_data?: {
            items: Array<{
              media_id: string;
              id: number;
            }>;
          };
        };
      }>;
      before: any;
    };
  };
  
  export type IWallHavenSearchData = {
    data: Array<{
      id?: string;
      url?: string;
      short_url?: string;
      views?: number;
      favorites?: number;
      source?: string;
      purity?: string;
      category?: string;
      dimension_x?: number;
      dimension_y?: number;
      resolution?: string;
      ratio?: string;
      file_size?: number;
      file_type?: string;
      created_at?: string;
      colors?: Array<string>;
      path?: string;
      thumbs?: {
        large: string;
        original: string;
        small: string;
      };
    }>;
    meta: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      query: string;
      seed: any;
    };
  };
  