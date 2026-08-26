import Swal from "sweetalert2";

// ================= GLOBAL ALERT =================

const Alert = Swal.mixin({

  background: "#111827",

  color: "#ffffff",

  confirmButtonColor: "#7c3aed",

  customClass: {

    popup: "modern-alert",

    title: "modern-alert-title",

    htmlContainer: "modern-alert-text",

    confirmButton: "modern-alert-button",
  },
});

// ================= ALERT FUNCTION =================

const AlertMessage = (

  title: string,

  text: string,

  icon:
    | "success"
    | "error"
    | "warning"
    | "info"
    | "question"
) => {

  Alert.fire({

    title,

    text,

    icon,
  });
};

export default AlertMessage;