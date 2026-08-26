import Swal from "sweetalert2";

// ================= TOAST INSTANCE =================

const Toast = Swal.mixin({

  toast: true,

  position: "top-end",

  showConfirmButton: false,

  timer: 3000,

  timerProgressBar: true,

  customClass: {
    popup: "modern-toast",
    title: "modern-toast-title",
    timerProgressBar: "modern-progress-bar",
  },

  didOpen: (toast) => {

    toast.onmouseenter = Swal.stopTimer;

    toast.onmouseleave = Swal.resumeTimer;
  },
});

// ================= TOAST HANDLER =================

const ToastMessage = (
  status: number,
  message?: string
) => {

  // ================= SUCCESS =================

  if (status >= 200 && status < 300) {

    Toast.fire({
      icon: "success",
      title: message || "Success",
    });

    return;
  }

  // ================= CLIENT ERROR =================

  if (status >= 400 && status < 500) {

    Toast.fire({
      icon: "warning",
      title: message || "Something Went Wrong",
    });

    return;
  }

  // ================= SERVER ERROR =================

  if (status >= 500) {

    Toast.fire({
      icon: "error",
      title: message || "Server Error",
    });

    return;
  }

  // ================= DEFAULT =================

  Toast.fire({
    icon: "info",
    title: message || "Notification",
  });
};

export default ToastMessage;