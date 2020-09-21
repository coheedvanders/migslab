<template>
  <div class="head label-info-sub">
    <img alt="Vue logo" src="../assets/migsdpclose.png" />
    <h2>Miguel Ramos</h2>
    <div>
      MCP | Dynamics 365 | MSD CRM/365 Developer | Software Developer |
      DotNet x Core | Blazor | Vue | Electron
    </div>
    <br />

    <div>
      <button class="button-primary">contact now</button>
    </div>
    <br />
    <br />
    <div class="align-left">
      <div class="output-line">
        <h3>
          <fa-icon class="icon" icon="quidditch" />&nbsp;about me
        </h3>
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
        <h3>
          <fa-icon class="icon" icon="code" />&nbsp;programming language, framework and methodologies
        </h3>
      </div>
      <div class="label-info">
        C$.Net, VB.Net, ASP, ASP MVC, MVC Web App, MVC Web API, Entity Framework, LINQ, T-SQL,
        JAVA (Basics), jQuery,JavaScript, CSS, HTML, HTML5, Cside for Dynamics NAV, Dexterity for
        Dynamics GP, XRM Framework, Bootstrap, C++, Waterfall, Agile, GIT, VUEJS, Blazor, Electron,
        DotNet Core
      </div>
      <div class="output-line">
        <h3>
          <fa-icon class="icon" icon="code" />&nbsp;projects
        </h3>
        <div class="row">
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Dynamics 365/CRM Customization and Implementation</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Employee Document Management System</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Timekeeping System</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Enrollment System</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Inventory and POS</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Application Integrations</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Payroll System</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">Chat Based Online Consultation</div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="project-box">e-Commerce Community</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.head {
  text-align: center;
}
img {
  height: 5rem;
  width: 5rem;
  border: 3px solid #333;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}

button {
  padding: 0.3rem 1rem;
}

.project-box {
  padding: 5px;
  display: inline-block;
  height: auto;
  width: 100%;
  text-align: center;
  border: 1px dashed #ffeadb;
  border-radius: 4px;
  color: white;
}
</style>