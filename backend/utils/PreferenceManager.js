const checkPreference = (tags, prefs) => {
  let allow = false;
  tags.map((tag) => {
    console.log("AAA");
    console.log(tags);
    console.log(prefs);
    tag = tag.toLowerCase();
    prefs.map((pref) => {
      pref = pref.toLowerCase();
      if (pref.includes(tag) || tag.includes(pref) || pref == tag) {
        allow = true;
      }
    });
    console.log(allow);
  });
  return allow;
};
module.exports = { checkPreference };
