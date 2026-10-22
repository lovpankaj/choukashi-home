"use client";

import { useState } from "react";
import { stories } from "@/lib/conversations";

const categories = [
  "All 15",
  "Language & spelling",
  "Price & doubts",
  "Change of plan",
  "Other questions",
];

export function ConversationGallery() {
  const [category, setCategory] = useState("All 15");
  const [selected, setSelected] = useState(stories[0].id);
  const [expanded, setExpanded] = useState(false);
  const options = stories.filter(
    (story) => category === "All 15" || story.category === category,
  );
  const story = options.find((item) => item.id === selected) ?? options[0];
  const index = options.indexOf(story);
  const messages = expanded ? story.messages : story.messages.slice(0, 4);

  function choose(id: string) {
    setSelected(id);
    setExpanded(false);
  }

  return (
    <div className="conversation-gallery">
      <div className="story-filters" aria-label="Conversation themes">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => {
              setCategory(item);
              setExpanded(false);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="story-workspace">
        <nav className="story-index" aria-label="Choose a real conversation">
          <p className="index-caption">
            Choose a conversation <span>{options.length}</span>
          </p>
          {options.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === story.id}
              onClick={() => choose(item.id)}
            >
              <span className="story-index-title">{item.title}</span>
              <span className="story-index-category">{item.category}</span>
              <span className="story-index-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </nav>
        <div className="mobile-story-picker">
          <label htmlFor="story-select">Choose a conversation</label>
          <select
            id="story-select"
            value={story.id}
            onChange={(event) => choose(event.target.value)}
          >
            {options.map((item, i) => (
              <option key={item.id} value={item.id}>
                {i + 1}. {item.title}
              </option>
            ))}
          </select>
        </div>
        <article className="story-detail" aria-labelledby="story-title">
          <div className="story-introduction" key={`${story.id}-intro`}>
            <p className="story-topic">{story.category}</p>
            <h3 id="story-title">{story.title}</h3>
            <p>{story.context}</p>
          </div>
          <div className="story-reading">
            <div className="story-chat" aria-label="Selected messages">
              <div className="chat-heading">
                <span className="chat-dot" aria-hidden="true" />
                <span>From a real dealership conversation</span>
                <span className="chat-excerpt-label">Excerpt</span>
              </div>
              <div className="chat-messages" key={story.id}>
                {messages.map((message, i) => (
                  <div key={message.position}>
                    {i > 0 &&
                      message.position > messages[i - 1].position + 1 && (
                        <p className="message-gap">Some messages left out</p>
                      )}
                    <div className={`chat-message ${message.role}`}>
                      <span className="chat-sender">
                        {message.role === "customer"
                          ? "Customer"
                          : message.role === "staff"
                            ? "Showroom team"
                            : "Choukashi"}
                      </span>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {story.messages.length > 4 && (
                <button
                  className="more-messages"
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded
                    ? "Show fewer messages"
                    : `Read ${story.messages.length - 4} more selected messages`}{" "}
                  <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                </button>
              )}
              {story.translation.length > 0 && (
                <details
                  className="translation"
                  key={`${story.id}-translation`}
                >
                  <summary>Read the meaning in English</summary>
                  <div>
                    <p className="translation-note">
                      The meaning in simple English. The original words are
                      above.
                    </p>
                    {story.translation.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
            <div className="story-takeaway" key={`${story.id}-takeaway`}>
              <div className="takeaway-business">
                <span className="takeaway-mark" aria-hidden="true">
                  ↗
                </span>
                <h4>Why this helps your business</h4>
                <p>{story.value}</p>
              </div>
              <div className="takeaway-outcome">
                <h4>What happened next</h4>
                <p>{story.outcome}</p>
              </div>
              <details className="story-evidence">
                <summary>About this example</summary>
                <p>{story.limit}</p>
                <p>
                  Part of a real chat from October 2026. Names and contact
                  details are hidden. The words are unchanged. Gaps are marked.
                </p>
              </details>
            </div>
          </div>
          <div className="story-pagination">
            <span>
              {index + 1} of {options.length} conversations
            </span>
            <div>
              <button
                type="button"
                aria-label="Previous conversation"
                disabled={index === 0}
                onClick={() => choose(options[index - 1].id)}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next conversation"
                disabled={index === options.length - 1}
                onClick={() => choose(options[index + 1].id)}
              >
                →
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
