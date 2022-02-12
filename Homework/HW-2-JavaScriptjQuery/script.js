function myFunction(){
  let mode_1 = "Regular";
  let mode_2 = "Hardened";
  let mode_3 = "Veteran";
  let mode_choice = $("input[name=mode]:checked").val(); // Single Choice

  if(mode_1 == mode_choice){
    location.href = "regular.html";
  } else if(mode_2 == mode_choice){
    location.href = "hardened.html";
  } else if(mode_3 == mode_choice){
    location.href = "veteran.html";
  }
}