function process(event) {
     var value = event.Get("system.filesystem.mount_point")
     if (value) {
          if (value === "/hostfs"){
               event.Put("system.filesystem.mount_point", value.replace(/^\/hostfs/, "/"));
          } else {
               event.Put("system.filesystem.mount_point", value.replace(/^\/hostfs/, ""));
          }
          event.Tag("Handle_by_js");
     }
}