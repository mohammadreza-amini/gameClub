<template>
  <div class="container" style="padding-top: 120px">
    <h1>Contact</h1>
    <hr />
    <main class="mx-auto my-2 px-3 py-2 shadow-lg rounded form-box">
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-12 col-lg-6 my-2">
            <label class="fs-5 mb-1">First name</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex.Mohammad"
              v-model="formData.firstName"
              @blur="validateField('firstName')"
              @input="clearError('firstName')"
            />
            <small v-if="errors.firstName" class="text-danger">{{
              errors.firstName
            }}</small>
          </div>

          <div class="col-12 col-lg-6 my-2">
            <label class="fs-5 mb-1">Last name</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex.Amini"
              v-model="formData.lastName"
              @blur="validateField('lastName')"
              @input="clearError('lastName')"
            />
            <small v-if="errors.lastName" class="text-danger">{{
              errors.lastName
            }}</small>
          </div>

          <div class="col-12 col-lg-6">
            <label class="fs-5 mb-1">E-mail</label>
            <input
              type="email"
              class="form-control"
              placeholder="ex. mohammad@gmail.com"
              v-model="formData.email"
              @blur="validateField('email')"
              @input="clearError('email')"
            />
            <small v-if="errors.email" class="text-danger">{{
              errors.email
            }}</small>
          </div>

          <div class="col-12 col-lg-6">
            <label class="fs-5 mb-1">Mobile Number</label>
            <input
              type="number"
              class="form-control no-arrows"
              placeholder="ex. 9********* without 0"
              v-model="formData.mobile"
              @blur="validateField('mobile')"
              @input="clearError('mobile')"
            />
            <small v-if="errors.mobile" class="text-danger">{{
              errors.mobile
            }}</small>
          </div>

          <div class="col-12 my-2">
            <textarea
              rows="5"
              class="form-control"
              placeholder="Your message..."
              v-model="formData.message"
              @blur="validateField('message')"
              @input="clearError('message')"
            ></textarea>
            <small v-if="errors.message" class="text-danger">{{
              errors.message
            }}</small>
          </div>

          <div class="col-12 my-2">
            <button class="btn btn-success px-4 rounded" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>

      <div v-if="successMessage" class="alert alert-success mt-3">
        {{ successMessage }}
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
});

const errors = ref({});

const successMessage = ref("");

const validateField = (field) => {
  switch (field) {
    case "firstName":
      if (!formData.value.firstName) {
        errors.value.firstName = "First name is required.";
      } else {
        delete errors.value.firstName;
      }
      break;

    case "lastName":
      if (!formData.value.lastName) {
        errors.value.lastName = "Last name is required.";
      } else {
        delete errors.value.lastName;
      }
      break;

    case "email":
      if (!formData.value.email) {
        errors.value.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = "Invalid email format.";
      } else {
        delete errors.value.email;
      }
      break;

    case "mobile":
      if (!formData.value.mobile) {
        errors.value.mobile = "Mobile number is required.";
      } else if (!/^\d{10,15}$/.test(formData.value.mobile)) {
        errors.value.mobile = "Mobile number must be 10-15 digits.";
      } else {
        delete errors.value.mobile;
      }
      break;

    case "message":
      if (!formData.value.message) {
        errors.value.message = "Message is required.";
      } else {
        delete errors.value.message;
      }
      break;

    default:
      break;
  }
};

const clearError = (field) => {
  delete errors.value[field];
};

const validateForm = () => {
  validateField("firstName");
  validateField("lastName");
  validateField("email");
  validateField("mobile");
  validateField("message");

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (validateForm()) {
    formData.value = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    };

    // Display success message
    successMessage.value = "Your message has been sent successfully!";
  }
};
</script>

<style scoped>
.form-box {
  width: 75%;
}
@media (max-width: 790px) {
  .form-box {
    width: 90%;
  }
}
.no-arrows {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
}

.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  display: none;
}

.no-arrows {
  -moz-appearance: textfield;
}
</style>
