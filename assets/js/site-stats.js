(function () {
  "use strict";

  var API_ROOT = "https://api.counterapi.dev/v1";
  var LIKE_KEY = "likes";
  var VIEW_KEY = "views";
  var LIKED_STORAGE_KEY = "hbby-site-liked-v1";
  var VIEWED_SESSION_KEY = "hbby-site-viewed-v1";

  function counterNamespace() {
    var host = window.location.hostname || "iiiiiiiword.github.io";
    return host.toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  }

  function counterUrl(key, increment) {
    return API_ROOT + "/" + counterNamespace() + "/" + key + (increment ? "/up" : "");
  }

  function readCount(payload) {
    var value = payload && (payload.count != null ? payload.count : payload.value);
    value = Number(value);
    if (!Number.isFinite(value)) throw new Error("Invalid counter response");
    return value;
  }

  function requestCount(key, increment) {
    return fetch(counterUrl(key, increment), { method: "GET", cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("Counter request failed");
        return response.json();
      })
      .then(readCount);
  }

  function formatCount(value) {
    return new Intl.NumberFormat().format(value);
  }

  function safeGet(storage, key) {
    try { return storage.getItem(key); } catch (error) { return null; }
  }

  function safeSet(storage, key, value) {
    try { storage.setItem(key, value); } catch (error) { /* Storage may be disabled. */ }
  }

  function init(widget) {
    var likeButton = widget.querySelector("[data-like-button]");
    var likeLabel = widget.querySelector("[data-like-label]");
    var likeCount = widget.querySelector("[data-like-count]");
    var viewCount = widget.querySelector("[data-view-count]");
    var status = widget.querySelector("[data-stats-status]");
    var liked = safeGet(window.localStorage, LIKED_STORAGE_KEY) === "true";
    var viewed = safeGet(window.sessionStorage, VIEWED_SESSION_KEY) === "true";

    function renderLikedState() {
      likeButton.classList.toggle("is-liked", liked);
      likeButton.setAttribute("aria-pressed", String(liked));
      likeLabel.textContent = liked ? "Liked" : "Like";
      likeButton.disabled = liked;
    }

    renderLikedState();

    Promise.all([
      requestCount(LIKE_KEY, false).then(function (count) {
        likeCount.textContent = formatCount(count);
      }),
      requestCount(VIEW_KEY, !viewed).then(function (count) {
        viewCount.textContent = formatCount(count);
        if (!viewed) safeSet(window.sessionStorage, VIEWED_SESSION_KEY, "true");
      })
    ]).catch(function () {
      status.textContent = "Stats temporarily unavailable";
    });

    likeButton.addEventListener("click", function () {
      if (liked) return;
      likeButton.disabled = true;
      status.textContent = "";

      requestCount(LIKE_KEY, true).then(function (count) {
        liked = true;
        safeSet(window.localStorage, LIKED_STORAGE_KEY, "true");
        likeCount.textContent = formatCount(count);
        renderLikedState();
      }).catch(function () {
        likeButton.disabled = false;
        status.textContent = "Please try again later";
      });
    });
  }

  function start() {
    document.querySelectorAll("[data-site-stats]").forEach(init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
