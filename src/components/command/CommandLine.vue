<template>
  <div class="cli-wrapper">
    <div v-if="type == 'input'">
      <div v-if="textValue">
        <div v-if="text == 'typehelp'">
          <span>
            $> type
            <a
              href="javascript:void(0);"
              class="highlight"
              @click="onOptionSelected('help')"
            >&quot;help&quot;</a> to show available commands
          </span>
        </div>
        <div v-if="text == 'typebored'">
          <span>
            $> type
            <a
              href="javascript:void(0);"
              class="highlight"
              @click="onOptionSelected('bored')"
            >&quot;bored&quot;</a> to display interface
          </span>
        </div>
        <div v-if="text !== 'typebored' && text !== 'typehelp'">
          <span>$> {{textValue}}</span>
        </div>
      </div>
      <div v-else>
        $>
        <span
          ref="cursor"
          class="terminal-input blinkcursor"
          type="text"
          v-text="inputVal"
          contenteditable
          @keyup="onEnter"
          @keydown.enter.prevent
          @blur="focusCursor"
        ></span>
      </div>
    </div>
    <div v-if="type == 'output'" class="output">
      <!-- help -->
      <div v-if="text == 'help'" class="label-info">
        <div class="output-line">
          <fa-icon class="icon" icon="quidditch" />dobby has come to answer your call for help
        </div>
        <div class="output-line">
          <fa-icon class="icon" icon="magic" />casting spell (displayamus commandus)
        </div>
        <div>please select a command:</div>
        <table>
          <tr
            class="help-item"
            v-for="command in commands"
            :key="command.code"
            @click="onOptionSelected(command.code)"
          >
            <td class="code">{{ command.code }}</td>
            <td class="description">( {{ command.description }} )</td>
          </tr>
        </table>
      </div>
      <!-- dev-info -->
      <div v-if="text == 'explain dev-info'">
        <div class="output-line">
          <fa-icon class="icon" icon="quidditch" />about me
        </div>
        <div class="label-info">
          <div>crafting software solutions since the rumored end of the earth (2012) lol</div>
          <br />
          <div>I'm a software developer with years of experience in the tech industry.</div>
          <div>
            well experienced in product development, solution designing, business process requirement gathering
            and research and development
          </div>
          <br />

          <div>worked extensively in Microsoft Dynamics Technologies such as CRM, NAV and GP.</div>
          <div>
            Involved and authored software solutions in Windows Forms, web applications, web API and
            integration projects across multiple systems
          </div>
        </div>
        <br />
        <div class="output-line">
          <fa-icon class="icon" icon="code" />programming language, framework and methodologies
        </div>
        <div class="label-info">
          C$.Net, VB.Net, ASP, ASP MVC, MVC Web App, MVC Web API, Entity Framework, LINQ, T-SQL,
          JAVA (Basics), jQuery,JavaScript, CSS, HTML, HTML5, Cside for Dynamics NAV, Dexterity for
          Dynamics GP, XRM Framework, Bootstrap, C++, Waterfall, Agile, GIT, VUEJS, Blazor, Electron,
          DotNet Core
        </div>
      </div>

      <!-- services -->
      <div v-if="text == 'explain services'">
        <div class="output-line">
          <fa-icon class="icon" icon="info" style="left: -15px;top: 3px;" />services offered
        </div>
        <div class="label-info">
          <br />
          <div>Consulting ( Project Based / Time and Material )</div>
          <div>Custom web app development (progressive for mobile)</div>
          <div>Website Development (No SEO)</div>
          <div>Project Management</div>
          <br />
        </div>
      </div>

      <!-- site info -->
      <div v-if="text == 'explain site'">
        <div class="output-line">
          <fa-icon class="icon" icon="info" style="left: -15px;top: 3px;" />about this site
        </div>
        <div class="label-info">
          <div>Developed using VueJS and .Net Core API with Entity Framework, Dapper and MySQL</div>
          <div>everything in here was written from scratch.</div>
          <div>It's lightweight and no, I didn't use bootstrap :)</div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandLine",
  data() {
    return {
      id: Math.floor(Math.random() * Math.floor(5000)),
      inputVal: "",
      hasPressedEnter: false,
      commands: [
        {
          code: "explain dev-info",
          description: "displays information about me",
        },
        {
          code: "explain services",
          description: "enumerates services I am offering",
        },
        {
          code: "explain site",
          description: "displays the information about this site",
        },
        {
          code: "warpto ui",
          description: "redirect to the main application page",
        },
        {
          code: "warpto about",
          description: "redirect to the about page",
        },
        {
          code: "warpto services",
          description: "redirect to the services page",
        },
        {
          code: "ask migs",
          description: "ask me a question",
        },
        {
          code: "create review",
          description: "write me a review",
        },
        {
          code: "create post",
          description: "post something here",
        },
        {
          code: "postboard",
          description: "redirects to posts board page",
        },
        {
          code: "clear",
          description: "clears the terminal interface",
        },
      ],
    };
  },
  props: ["text", "type", "htmlLine"],
  mounted() {
    this.focusCursor();
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.inputVal, this.text, this.hasPressedEnter);
  },
  updated() {
    console.log("beforeUpdate", this.inputVal, this.text, this.hasPressedEnter);
  },
  methods: {
    onEnter(event) {
      if (event.key == "Enter") {
        var src = event.target.innerText;
        src = src == "" ? "nocommand" : src;
        this.inputVal = src;
        this.hasPressedEnter = true;
        this.$emit("pressedEnterKey", src);
      }
    },
    onOptionSelected(code) {
      this.$emit("pressedEnterKey", code);
    },
    focusCursor() {
      console.log("focusCursor", this.id, this.$refs.cursor);
      if (this.$refs.cursor) {
        // this.$refs.activeCursor.focus();
        this.$refs.cursor.focus();
      }
    },
  },
  computed: {
    textValue: function () {
      var val = this.hasPressedEnter ? this.inputVal : this.text;
      return val;
    },
  },
};
</script>

<style scoped>
.cli-wrapper {
  padding: 0 11px 0px 1rem;
}

.output-line {
  position: relative;
}
.output-line .icon {
  position: absolute;
  left: -25px;
  top: 7px;
}

.terminal-input {
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  padding-left: 6px;
}

.terminal-input:focus {
  animation: blinkcursor 0.5s step-end infinite alternate;
}

@keyframes blinkcursor {
  50% {
    border-right: 4px solid white;
  }
}

.highlight {
  color: #ff9a76;
  text-decoration-line: unset;
}

table {
  margin-left: 20px;
}
.help-item {
  cursor: pointer;
}
.help-item:hover .code {
  color: #ff9a76;
}

.help-item .description {
  display: none;
}

.help-item:hover .description {
  display: inline;
}

.output {
  padding: 5px 5px 5px 1.5rem;
}
</style>