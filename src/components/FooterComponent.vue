<template>
  <footer class="bg-dark border-top pt-2 mt-5">
    <div class="container">
      <main class="px-2 py-3 d-flex flex-column justify-content-center">
        <div class="logo-footer pb-2 border-b my-2 mx-auto">
          <img
            src="../assets/images/logo.png"
            alt="logo-footer"
            class="img-fluid pic-logo-footer"
          />
        </div>
        <hr class="text-white" />
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          tenetur asperiores illo praesentium, facere minima quos dolorem
          ratione accusamus delectus commodi! Repellendus non vero ratione
          eveniet dolor animi, quasi, magni omnis dolore ipsam nemo, quibusdam
          voluptates necessitatibus accusamus inventore eaque.
        </p>
        <hr class="text-white" />
        <div class="my-2">
          <ul class="d-flex flex-row justify-content-center">
            <li class="mx-3 btn btn-outline-light px-3 py-1">
              <router-link
                to="/"
                class="nav-link"
                active-class="custom-active"
                exact
              >
                Home
              </router-link>
            </li>
            <li class="mx-3 btn btn-outline-light px-3">
              <router-link
                to="/blog"
                class="nav-link"
                active-class="custom-active"
              >
                blog
              </router-link>
            </li>
            <li class="mx-3 btn btn-outline-light px-3">
              <router-link
                to="/contact"
                class="nav-link"
                active-class="custom-active"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
        <div
          class="footer-social d-flex justify-content-center align-items-center"
        >
          <!-- Facebook -->
          <i class="mx-2 fab fa-facebook-f fa-2x" style="color: #3b5998"></i>

          <!-- Instagram -->
          <i class="mx-2 fab fa-instagram fa-2x" style="color: #ac2bac"></i>

          <!-- Linkedin -->
          <i class="mx-2 fab fa-linkedin-in fa-2x" style="color: #0082ca"></i>

          <!-- Youtube -->
          <i class="mx-2 fab fa-youtube fa-2x" style="color: #ed302f"></i>

          <!-- Github -->
          <a href="https://github.com/mohammadreza-amini"
            ><i class="mx-2 fab fa-github fa-2x" style="color: #333333"></i
          ></a>

          <!-- Whatsapp -->
          <i class="mx-2 fab fa-whatsapp fa-2x" style="color: #25d366"></i>
        </div>
        <div></div>
        <div
          class="text-center mt-2 py-2 rounded text-white"
          style="background-color: rgba(0, 0, 0, 0.1)"
        >
          © 2025 Copyright:
          <a class="text-white" href="https://github.com/mohammadreza-amini"
            >MohammadReza Amini</a
          >
        </div>
      </main>
    </div>
  </footer>
</template>
<style scoped>
.pic-logo-footer {
  width: 100px !important;
}
</style>
