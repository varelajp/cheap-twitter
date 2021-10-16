var app = new Vue({
  // delimiters: ['[[', ']]'],
  el: '#app',
  template: `
<div>
    <p v-if="errors.length">
        <b>Please fix next errors:</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

    <template class="w-75">
        <table class="table w-75 mx-auto w-auto">
            <tbody>
                <tr>
                    <td class="col-6">
                        <div class="d-flex flex-row">
                            <input class="form-control m-2" id="tweetContent" name="tweetContent" v-model="tweetContent" :maxlength="50" placeholder="What's happening?">
                        </div>
                    </td>
                    <td class="col-5">
                        <div class="d-flex flex-row">
                            <input class="form-control m-2" id="tweetAuthor" name="tweetAuthor" v-model="tweetAuthor" :maxlength="40" placeholder="Your Name">
                        </div>
                    </td>
                    <td class="col-2 text-center">
                        <button type="button"
                            class="btn btn-primary m-2 fload-end"
                            @click="checkForm()">
                            Tweet
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>

    <template v-if="tweets.length">
        <table class="table table-striped .table-responsive-md w-75 mx-auto w-auto">
            <tbody>
                <tr v-for="tweet in tweets">
                    <td class="col-3 text-center">{{ formatDateTime(tweet.date) }}</td>
                    <td class="col-5">{{ tweet.content }}</td>
                    <td class="col-3">{{ tweet.author }}</td>
                </tr>
            </tbody>
        </table>
    </template>
    <template v-else>
        <div>
            <h3 class="d-flex justify-content-center">No tweets sent. Send one!</h3>
        </div>
    </template>
</div>`,
  data() {
    return {
      errors: [],
      tweets: [],
      tweetContent: null,
      tweetAuthor: null
    }
  },
  methods: {
    checkForm: function () {
      if (this.tweetContent && this.tweetAuthor) {
        this.tweetClick();
        return true;
      }

      this.errors = [];
      // errors
      if (!this.tweetContent) {
        this.errors.push('Input your tweet.');
      }
      if (!this.tweetAuthor) {
        this.errors.push('Input your name.');
      }
      // focus
      if (!this.tweetAuthor) {
        document.getElementById('tweetAuthor').focus();
      }
      if (!this.tweetContent) {
        document.getElementById('tweetContent').focus();
      }
    },
    refreshData() {
      this.tweetContent = null;
      this.tweetAuthor = null;
      document.getElementById('tweetContent').focus();
      axios
        .get(`${vars.API_URL}/get_tweets`)
        .then(response => (this.tweets = response.data))
        .catch(error => console.log(error));
    },
    async tweetClick() {
      try {
        const response = await axios
          .post(
            vars.API_URL,
            {
              content: this.tweetContent,
              author: this.tweetAuthor
            }
          );
          this.refreshData();
          alert(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    formatDateTime(dates) {
      return new Date(dates).toLocaleString('en-GB');
    }
  },
  mounted: function() {
    this.refreshData();
  }
});
