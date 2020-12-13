<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>
          <div class="card-body">
            <form action="" @submit.prevent="sendMsg">
              <div class="form-group">
                <label for="msg">msg</label>
                <input
                  type="text"
                  name=""
                  id="msg"
                  class="form-control"
                  v-model="msg"
                  @keypress.enter="sendMsg"
                />
              </div>
              <button class="btn btn-primary">SEND</button>
            </form>
          </div>
          <div class="card-body">
            <slot>I'm an example component.</slot>
            <p v-for="msg in messages" :key="msg.id">{{msg.id}}{{msg.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      users_viewing: [],
      messages: [],
      msg: "",
    };
  },
  methods: {
    sendMsg() {
      // console.log("Component mounted.", this.msg);
      axios.post('/messages', {body: this.msg});
            // this.messages.push(this.msg);
            this.msg = '';
    },
    
  },
  mounted() {
      // console.log("Component mounted.", window.Echo.channel("chat"));
       
      window.Echo.channel("aws_database_chat").listen("Message", ({message})=>{
          console.log("message.", message);
          this.messages.push({
            id: Date.now(),
            text: message
          });
            
      }
    );
  },
  created() {
    
    // window.Echo.channel("chat").listen("Message", ({ message }) => {
    //   // console.log('message.dody :>> ', message.body);
    //   this.messages.push(message);
    // });
    // Echo.join("survey." + this.id)
    //   .here((users) => {
    //     this.users_viewing = users;
    //     this.$forceUpdate();
    //   })
    //   .joining((user) => {
    //     if (this.checkIfUserAlreadyViewingSurvey(user)) {
    //       this.users_viewing.push(user);
    //       this.$forceUpdate();
    //     }
    //   })
    //   .leaving((user) => {
    //     this.removeViewingUser(user);
    //     this.$forceUpdate();
    //   });
  },
};
</script>
