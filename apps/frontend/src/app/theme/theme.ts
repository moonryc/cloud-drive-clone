import {MantineThemeOverride} from "@mantine/core";

export const theme:MantineThemeOverride = {
 colorScheme:"dark",
  defaultRadius: "md",
  components:{
   TextInput:{
     defaultProps:{
       style:{
         margin:"2rem"
       }
     }
   }
  }
}
