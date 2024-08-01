// @ts-check
import React from "react";
import "./Design.css";

export function Tools() {
  return (
    <div id="tools" className="col-md-3 collapse">
      <div className="tools-div">
        <b>Backside Icons</b>
        <div className="icons">
          <input id="icon_num" type="hidden" value="" />
          <i
            id="icon-top"
            className="icon rpg-Icon1_41"
            title="1_41"
            /*style="color: #2c3e50 !important"*/
            onclick="$('#icon_num').val('icon-top'); $(this).addClass('selection'); $('#current_icons').show();"
          ></i>
          <i
            id="icon"
            className="icon rpg-Icon1_01"
            title="1_01"
            /*style="color: #2c3e50 !important"*/
            onclick="$('#icon_num').val('icon'); $(this).addClass('selection'); $('#current_icons').show();"
          ></i>
          <i
            id="icon-bot"
            className="icon rpg-Icon1_65"
            title="1_65"
            /*style="color: #2c3e50 !important"*/
            onclick="$('#icon_num').val('icon-bot'); $(this).addClass('selection'); $('#current_icons').show();"
          ></i>
        </div>

        <div id="current_icons" style={{ display: "none" }} onclick="$(this).hide()">
          <div className="icons">
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_01').addClass('icon').text('').attr('title', '1_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_01"
              title="1_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_02').addClass('icon').text('').attr('title', '1_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_02"
              title="1_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_03').addClass('icon').text('').attr('title', '1_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_03"
              title="1_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_04').addClass('icon').text('').attr('title', '1_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_04"
              title="1_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_05').addClass('icon').text('').attr('title', '1_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_05"
              title="1_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_06').addClass('icon').text('').attr('title', '1_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_06"
              title="1_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_07').addClass('icon').text('').attr('title', '1_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_07"
              title="1_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_08').addClass('icon').text('').attr('title', '1_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_08"
              title="1_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_09').addClass('icon').text('').attr('title', '1_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_09"
              title="1_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_10').addClass('icon').text('').attr('title', '1_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_10"
              title="1_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_11').addClass('icon').text('').attr('title', '1_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_11"
              title="1_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_12').addClass('icon').text('').attr('title', '1_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_12"
              title="1_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_13').addClass('icon').text('').attr('title', '1_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_13"
              title="1_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_14').addClass('icon').text('').attr('title', '1_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_14"
              title="1_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_15').addClass('icon').text('').attr('title', '1_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_15"
              title="1_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_16').addClass('icon').text('').attr('title', '1_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_16"
              title="1_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_17').addClass('icon').text('').attr('title', '1_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_17"
              title="1_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_18').addClass('icon').text('').attr('title', '1_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_18"
              title="1_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_19').addClass('icon').text('').attr('title', '1_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_19"
              title="1_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_20').addClass('icon').text('').attr('title', '1_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_20"
              title="1_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_21').addClass('icon').text('').attr('title', '1_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_21"
              title="1_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_22').addClass('icon').text('').attr('title', '1_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_22"
              title="1_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_23').addClass('icon').text('').attr('title', '1_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_23"
              title="1_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_24').addClass('icon').text('').attr('title', '1_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_24"
              title="1_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_25').addClass('icon').text('').attr('title', '1_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_25"
              title="1_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_26').addClass('icon').text('').attr('title', '1_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_26"
              title="1_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_27').addClass('icon').text('').attr('title', '1_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_27"
              title="1_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_28').addClass('icon').text('').attr('title', '1_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_28"
              title="1_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_29').addClass('icon').text('').attr('title', '1_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_29"
              title="1_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_30').addClass('icon').text('').attr('title', '1_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_30"
              title="1_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_31').addClass('icon').text('').attr('title', '1_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_31"
              title="1_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_32').addClass('icon').text('').attr('title', '1_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_32"
              title="1_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_33').addClass('icon').text('').attr('title', '1_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_33"
              title="1_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_34').addClass('icon').text('').attr('title', '1_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_34"
              title="1_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_35').addClass('icon').text('').attr('title', '1_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_35"
              title="1_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_36').addClass('icon').text('').attr('title', '1_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_36"
              title="1_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_37').addClass('icon').text('').attr('title', '1_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_37"
              title="1_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_38').addClass('icon').text('').attr('title', '1_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_38"
              title="1_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_39').addClass('icon').text('').attr('title', '1_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_39"
              title="1_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_40').addClass('icon').text('').attr('title', '1_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_40"
              title="1_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_41').addClass('icon').text('').attr('title', '1_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_41"
              title="1_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_42').addClass('icon').text('').attr('title', '1_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_42"
              title="1_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_43').addClass('icon').text('').attr('title', '1_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_43"
              title="1_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_44').addClass('icon').text('').attr('title', '1_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_44"
              title="1_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_45').addClass('icon').text('').attr('title', '1_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_45"
              title="1_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_46').addClass('icon').text('').attr('title', '1_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_46"
              title="1_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_47').addClass('icon').text('').attr('title', '1_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_47"
              title="1_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_48').addClass('icon').text('').attr('title', '1_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_48"
              title="1_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_49').addClass('icon').text('').attr('title', '1_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_49"
              title="1_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_50').addClass('icon').text('').attr('title', '1_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_50"
              title="1_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_51').addClass('icon').text('').attr('title', '1_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_51"
              title="1_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_52').addClass('icon').text('').attr('title', '1_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_52"
              title="1_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_53').addClass('icon').text('').attr('title', '1_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_53"
              title="1_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_54').addClass('icon').text('').attr('title', '1_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_54"
              title="1_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_55').addClass('icon').text('').attr('title', '1_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_55"
              title="1_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_56').addClass('icon').text('').attr('title', '1_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_56"
              title="1_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_57').addClass('icon').text('').attr('title', '1_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_57"
              title="1_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_58').addClass('icon').text('').attr('title', '1_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_58"
              title="1_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_59').addClass('icon').text('').attr('title', '1_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_59"
              title="1_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_60').addClass('icon').text('').attr('title', '1_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_60"
              title="1_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_61').addClass('icon').text('').attr('title', '1_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_61"
              title="1_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_62').addClass('icon').text('').attr('title', '1_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_62"
              title="1_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_63').addClass('icon').text('').attr('title', '1_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_63"
              title="1_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_64').addClass('icon').text('').attr('title', '1_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_64"
              title="1_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_65').addClass('icon').text('').attr('title', '1_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_65"
              title="1_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_66').addClass('icon').text('').attr('title', '1_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_66"
              title="1_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_67').addClass('icon').text('').attr('title', '1_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_67"
              title="1_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_68').addClass('icon').text('').attr('title', '1_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_68"
              title="1_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_69').addClass('icon').text('').attr('title', '1_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_69"
              title="1_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_70').addClass('icon').text('').attr('title', '1_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_70"
              title="1_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_71').addClass('icon').text('').attr('title', '1_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_71"
              title="1_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_72').addClass('icon').text('').attr('title', '1_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_72"
              title="1_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_73').addClass('icon').text('').attr('title', '1_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_73"
              title="1_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_74').addClass('icon').text('').attr('title', '1_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_74"
              title="1_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_75').addClass('icon').text('').attr('title', '1_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_75"
              title="1_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_76').addClass('icon').text('').attr('title', '1_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_76"
              title="1_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_77').addClass('icon').text('').attr('title', '1_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_77"
              title="1_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_78').addClass('icon').text('').attr('title', '1_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_78"
              title="1_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_79').addClass('icon').text('').attr('title', '1_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_79"
              title="1_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_80').addClass('icon').text('').attr('title', '1_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_80"
              title="1_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_81').addClass('icon').text('').attr('title', '1_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_81"
              title="1_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_82').addClass('icon').text('').attr('title', '1_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_82"
              title="1_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_83').addClass('icon').text('').attr('title', '1_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_83"
              title="1_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_84').addClass('icon').text('').attr('title', '1_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_84"
              title="1_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_85').addClass('icon').text('').attr('title', '1_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_85"
              title="1_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_86').addClass('icon').text('').attr('title', '1_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_86"
              title="1_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_87').addClass('icon').text('').attr('title', '1_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_87"
              title="1_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_88').addClass('icon').text('').attr('title', '1_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_88"
              title="1_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon1_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon1_89').addClass('icon').text('').attr('title', '1_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon1_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon1_89"
              title="1_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_01').addClass('icon').text('').attr('title', '2_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_01"
              title="2_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_02').addClass('icon').text('').attr('title', '2_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_02"
              title="2_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_03').addClass('icon').text('').attr('title', '2_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_03"
              title="2_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_04').addClass('icon').text('').attr('title', '2_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_04"
              title="2_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_05').addClass('icon').text('').attr('title', '2_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_05"
              title="2_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_06').addClass('icon').text('').attr('title', '2_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_06"
              title="2_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_07').addClass('icon').text('').attr('title', '2_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_07"
              title="2_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_08').addClass('icon').text('').attr('title', '2_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_08"
              title="2_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_09').addClass('icon').text('').attr('title', '2_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_09"
              title="2_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_10').addClass('icon').text('').attr('title', '2_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_10"
              title="2_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_11').addClass('icon').text('').attr('title', '2_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_11"
              title="2_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_12').addClass('icon').text('').attr('title', '2_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_12"
              title="2_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_13').addClass('icon').text('').attr('title', '2_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_13"
              title="2_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_14').addClass('icon').text('').attr('title', '2_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_14"
              title="2_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_15').addClass('icon').text('').attr('title', '2_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_15"
              title="2_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_16').addClass('icon').text('').attr('title', '2_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_16"
              title="2_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_17').addClass('icon').text('').attr('title', '2_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_17"
              title="2_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_18').addClass('icon').text('').attr('title', '2_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_18"
              title="2_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_19').addClass('icon').text('').attr('title', '2_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_19"
              title="2_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_20').addClass('icon').text('').attr('title', '2_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_20"
              title="2_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_21').addClass('icon').text('').attr('title', '2_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_21"
              title="2_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_22').addClass('icon').text('').attr('title', '2_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_22"
              title="2_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_23').addClass('icon').text('').attr('title', '2_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_23"
              title="2_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_24').addClass('icon').text('').attr('title', '2_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_24"
              title="2_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_25').addClass('icon').text('').attr('title', '2_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_25"
              title="2_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_26').addClass('icon').text('').attr('title', '2_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_26"
              title="2_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_27').addClass('icon').text('').attr('title', '2_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_27"
              title="2_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_28').addClass('icon').text('').attr('title', '2_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_28"
              title="2_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_29').addClass('icon').text('').attr('title', '2_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_29"
              title="2_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_30').addClass('icon').text('').attr('title', '2_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_30"
              title="2_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_31').addClass('icon').text('').attr('title', '2_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_31"
              title="2_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_32').addClass('icon').text('').attr('title', '2_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_32"
              title="2_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_33').addClass('icon').text('').attr('title', '2_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_33"
              title="2_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_34').addClass('icon').text('').attr('title', '2_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_34"
              title="2_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_35').addClass('icon').text('').attr('title', '2_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_35"
              title="2_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_36').addClass('icon').text('').attr('title', '2_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_36"
              title="2_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_37').addClass('icon').text('').attr('title', '2_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_37"
              title="2_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_38').addClass('icon').text('').attr('title', '2_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_38"
              title="2_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_39').addClass('icon').text('').attr('title', '2_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_39"
              title="2_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_40').addClass('icon').text('').attr('title', '2_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_40"
              title="2_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_41').addClass('icon').text('').attr('title', '2_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_41"
              title="2_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_42').addClass('icon').text('').attr('title', '2_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_42"
              title="2_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_43').addClass('icon').text('').attr('title', '2_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_43"
              title="2_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_44').addClass('icon').text('').attr('title', '2_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_44"
              title="2_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_45').addClass('icon').text('').attr('title', '2_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_45"
              title="2_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_46').addClass('icon').text('').attr('title', '2_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_46"
              title="2_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_47').addClass('icon').text('').attr('title', '2_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_47"
              title="2_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_48').addClass('icon').text('').attr('title', '2_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_48"
              title="2_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_49').addClass('icon').text('').attr('title', '2_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_49"
              title="2_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_50').addClass('icon').text('').attr('title', '2_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_50"
              title="2_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_51').addClass('icon').text('').attr('title', '2_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_51"
              title="2_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_52').addClass('icon').text('').attr('title', '2_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_52"
              title="2_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_53').addClass('icon').text('').attr('title', '2_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_53"
              title="2_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_54').addClass('icon').text('').attr('title', '2_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_54"
              title="2_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_55').addClass('icon').text('').attr('title', '2_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_55"
              title="2_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_56').addClass('icon').text('').attr('title', '2_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_56"
              title="2_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_57').addClass('icon').text('').attr('title', '2_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_57"
              title="2_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_58').addClass('icon').text('').attr('title', '2_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_58"
              title="2_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_59').addClass('icon').text('').attr('title', '2_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_59"
              title="2_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_60').addClass('icon').text('').attr('title', '2_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_60"
              title="2_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_61').addClass('icon').text('').attr('title', '2_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_61"
              title="2_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_62').addClass('icon').text('').attr('title', '2_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_62"
              title="2_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_63').addClass('icon').text('').attr('title', '2_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_63"
              title="2_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_64').addClass('icon').text('').attr('title', '2_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_64"
              title="2_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_65').addClass('icon').text('').attr('title', '2_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_65"
              title="2_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_66').addClass('icon').text('').attr('title', '2_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_66"
              title="2_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_67').addClass('icon').text('').attr('title', '2_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_67"
              title="2_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_68').addClass('icon').text('').attr('title', '2_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_68"
              title="2_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_69').addClass('icon').text('').attr('title', '2_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_69"
              title="2_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_70').addClass('icon').text('').attr('title', '2_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_70"
              title="2_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_71').addClass('icon').text('').attr('title', '2_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_71"
              title="2_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_72').addClass('icon').text('').attr('title', '2_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_72"
              title="2_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_73').addClass('icon').text('').attr('title', '2_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_73"
              title="2_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_74').addClass('icon').text('').attr('title', '2_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_74"
              title="2_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_75').addClass('icon').text('').attr('title', '2_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_75"
              title="2_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_76').addClass('icon').text('').attr('title', '2_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_76"
              title="2_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_77').addClass('icon').text('').attr('title', '2_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_77"
              title="2_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_78').addClass('icon').text('').attr('title', '2_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_78"
              title="2_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_79').addClass('icon').text('').attr('title', '2_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_79"
              title="2_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_80').addClass('icon').text('').attr('title', '2_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_80"
              title="2_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_81').addClass('icon').text('').attr('title', '2_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_81"
              title="2_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_82').addClass('icon').text('').attr('title', '2_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_82"
              title="2_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_83').addClass('icon').text('').attr('title', '2_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_83"
              title="2_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_84').addClass('icon').text('').attr('title', '2_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_84"
              title="2_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_85').addClass('icon').text('').attr('title', '2_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_85"
              title="2_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_86').addClass('icon').text('').attr('title', '2_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_86"
              title="2_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_87').addClass('icon').text('').attr('title', '2_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_87"
              title="2_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_88').addClass('icon').text('').attr('title', '2_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_88"
              title="2_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon2_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon2_89').addClass('icon').text('').attr('title', '2_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon2_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon2_89"
              title="2_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_01').addClass('icon').text('').attr('title', '3_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_01"
              title="3_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_02').addClass('icon').text('').attr('title', '3_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_02"
              title="3_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_03').addClass('icon').text('').attr('title', '3_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_03"
              title="3_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_04').addClass('icon').text('').attr('title', '3_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_04"
              title="3_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_05').addClass('icon').text('').attr('title', '3_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_05"
              title="3_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_06').addClass('icon').text('').attr('title', '3_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_06"
              title="3_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_07').addClass('icon').text('').attr('title', '3_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_07"
              title="3_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_08').addClass('icon').text('').attr('title', '3_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_08"
              title="3_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_09').addClass('icon').text('').attr('title', '3_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_09"
              title="3_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_10').addClass('icon').text('').attr('title', '3_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_10"
              title="3_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_11').addClass('icon').text('').attr('title', '3_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_11"
              title="3_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_12').addClass('icon').text('').attr('title', '3_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_12"
              title="3_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_13').addClass('icon').text('').attr('title', '3_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_13"
              title="3_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_14').addClass('icon').text('').attr('title', '3_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_14"
              title="3_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_15').addClass('icon').text('').attr('title', '3_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_15"
              title="3_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_16').addClass('icon').text('').attr('title', '3_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_16"
              title="3_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_17').addClass('icon').text('').attr('title', '3_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_17"
              title="3_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_18').addClass('icon').text('').attr('title', '3_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_18"
              title="3_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_19').addClass('icon').text('').attr('title', '3_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_19"
              title="3_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_20').addClass('icon').text('').attr('title', '3_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_20"
              title="3_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_21').addClass('icon').text('').attr('title', '3_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_21"
              title="3_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_22').addClass('icon').text('').attr('title', '3_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_22"
              title="3_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_23').addClass('icon').text('').attr('title', '3_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_23"
              title="3_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_24').addClass('icon').text('').attr('title', '3_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_24"
              title="3_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_25').addClass('icon').text('').attr('title', '3_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_25"
              title="3_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_26').addClass('icon').text('').attr('title', '3_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_26"
              title="3_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_27').addClass('icon').text('').attr('title', '3_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_27"
              title="3_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_28').addClass('icon').text('').attr('title', '3_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_28"
              title="3_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_29').addClass('icon').text('').attr('title', '3_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_29"
              title="3_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_30').addClass('icon').text('').attr('title', '3_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_30"
              title="3_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_31').addClass('icon').text('').attr('title', '3_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_31"
              title="3_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_32').addClass('icon').text('').attr('title', '3_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_32"
              title="3_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_33').addClass('icon').text('').attr('title', '3_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_33"
              title="3_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_34').addClass('icon').text('').attr('title', '3_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_34"
              title="3_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_35').addClass('icon').text('').attr('title', '3_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_35"
              title="3_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_36').addClass('icon').text('').attr('title', '3_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_36"
              title="3_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_37').addClass('icon').text('').attr('title', '3_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_37"
              title="3_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_38').addClass('icon').text('').attr('title', '3_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_38"
              title="3_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_39').addClass('icon').text('').attr('title', '3_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_39"
              title="3_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_40').addClass('icon').text('').attr('title', '3_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_40"
              title="3_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_41').addClass('icon').text('').attr('title', '3_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_41"
              title="3_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_42').addClass('icon').text('').attr('title', '3_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_42"
              title="3_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_43').addClass('icon').text('').attr('title', '3_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_43"
              title="3_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_44').addClass('icon').text('').attr('title', '3_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_44"
              title="3_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_45').addClass('icon').text('').attr('title', '3_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_45"
              title="3_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_46').addClass('icon').text('').attr('title', '3_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_46"
              title="3_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_47').addClass('icon').text('').attr('title', '3_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_47"
              title="3_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_48').addClass('icon').text('').attr('title', '3_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_48"
              title="3_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_49').addClass('icon').text('').attr('title', '3_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_49"
              title="3_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_50').addClass('icon').text('').attr('title', '3_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_50"
              title="3_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_51').addClass('icon').text('').attr('title', '3_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_51"
              title="3_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_52').addClass('icon').text('').attr('title', '3_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_52"
              title="3_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_53').addClass('icon').text('').attr('title', '3_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_53"
              title="3_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_54').addClass('icon').text('').attr('title', '3_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_54"
              title="3_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_55').addClass('icon').text('').attr('title', '3_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_55"
              title="3_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_56').addClass('icon').text('').attr('title', '3_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_56"
              title="3_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_57').addClass('icon').text('').attr('title', '3_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_57"
              title="3_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_58').addClass('icon').text('').attr('title', '3_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_58"
              title="3_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_59').addClass('icon').text('').attr('title', '3_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_59"
              title="3_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_60').addClass('icon').text('').attr('title', '3_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_60"
              title="3_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_61').addClass('icon').text('').attr('title', '3_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_61"
              title="3_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_62').addClass('icon').text('').attr('title', '3_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_62"
              title="3_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_63').addClass('icon').text('').attr('title', '3_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_63"
              title="3_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_64').addClass('icon').text('').attr('title', '3_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_64"
              title="3_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_65').addClass('icon').text('').attr('title', '3_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_65"
              title="3_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_66').addClass('icon').text('').attr('title', '3_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_66"
              title="3_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_67').addClass('icon').text('').attr('title', '3_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_67"
              title="3_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_68').addClass('icon').text('').attr('title', '3_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_68"
              title="3_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_69').addClass('icon').text('').attr('title', '3_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_69"
              title="3_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_70').addClass('icon').text('').attr('title', '3_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_70"
              title="3_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_71').addClass('icon').text('').attr('title', '3_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_71"
              title="3_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_72').addClass('icon').text('').attr('title', '3_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_72"
              title="3_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_73').addClass('icon').text('').attr('title', '3_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_73"
              title="3_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_74').addClass('icon').text('').attr('title', '3_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_74"
              title="3_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_75').addClass('icon').text('').attr('title', '3_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_75"
              title="3_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_76').addClass('icon').text('').attr('title', '3_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_76"
              title="3_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_77').addClass('icon').text('').attr('title', '3_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_77"
              title="3_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_78').addClass('icon').text('').attr('title', '3_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_78"
              title="3_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_79').addClass('icon').text('').attr('title', '3_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_79"
              title="3_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_80').addClass('icon').text('').attr('title', '3_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_80"
              title="3_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_81').addClass('icon').text('').attr('title', '3_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_81"
              title="3_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_82').addClass('icon').text('').attr('title', '3_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_82"
              title="3_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_83').addClass('icon').text('').attr('title', '3_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_83"
              title="3_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_84').addClass('icon').text('').attr('title', '3_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_84"
              title="3_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_85').addClass('icon').text('').attr('title', '3_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_85"
              title="3_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_86').addClass('icon').text('').attr('title', '3_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_86"
              title="3_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_87').addClass('icon').text('').attr('title', '3_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_87"
              title="3_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_88').addClass('icon').text('').attr('title', '3_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_88"
              title="3_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon3_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon3_89').addClass('icon').text('').attr('title', '3_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon3_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon3_89"
              title="3_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_01').addClass('icon').text('').attr('title', '4_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_01"
              title="4_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_02').addClass('icon').text('').attr('title', '4_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_02"
              title="4_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_03').addClass('icon').text('').attr('title', '4_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_03"
              title="4_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_04').addClass('icon').text('').attr('title', '4_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_04"
              title="4_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_05').addClass('icon').text('').attr('title', '4_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_05"
              title="4_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_06').addClass('icon').text('').attr('title', '4_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_06"
              title="4_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_07').addClass('icon').text('').attr('title', '4_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_07"
              title="4_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_08').addClass('icon').text('').attr('title', '4_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_08"
              title="4_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_09').addClass('icon').text('').attr('title', '4_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_09"
              title="4_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_10').addClass('icon').text('').attr('title', '4_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_10"
              title="4_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_11').addClass('icon').text('').attr('title', '4_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_11"
              title="4_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_12').addClass('icon').text('').attr('title', '4_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_12"
              title="4_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_13').addClass('icon').text('').attr('title', '4_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_13"
              title="4_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_14').addClass('icon').text('').attr('title', '4_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_14"
              title="4_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_15').addClass('icon').text('').attr('title', '4_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_15"
              title="4_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_16').addClass('icon').text('').attr('title', '4_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_16"
              title="4_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_17').addClass('icon').text('').attr('title', '4_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_17"
              title="4_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_18').addClass('icon').text('').attr('title', '4_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_18"
              title="4_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_19').addClass('icon').text('').attr('title', '4_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_19"
              title="4_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_20').addClass('icon').text('').attr('title', '4_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_20"
              title="4_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_21').addClass('icon').text('').attr('title', '4_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_21"
              title="4_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_22').addClass('icon').text('').attr('title', '4_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_22"
              title="4_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_23').addClass('icon').text('').attr('title', '4_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_23"
              title="4_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_24').addClass('icon').text('').attr('title', '4_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_24"
              title="4_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_25').addClass('icon').text('').attr('title', '4_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_25"
              title="4_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_26').addClass('icon').text('').attr('title', '4_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_26"
              title="4_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_27').addClass('icon').text('').attr('title', '4_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_27"
              title="4_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_28').addClass('icon').text('').attr('title', '4_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_28"
              title="4_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_29').addClass('icon').text('').attr('title', '4_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_29"
              title="4_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_30').addClass('icon').text('').attr('title', '4_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_30"
              title="4_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_31').addClass('icon').text('').attr('title', '4_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_31"
              title="4_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_32').addClass('icon').text('').attr('title', '4_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_32"
              title="4_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_33').addClass('icon').text('').attr('title', '4_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_33"
              title="4_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_34').addClass('icon').text('').attr('title', '4_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_34"
              title="4_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_35').addClass('icon').text('').attr('title', '4_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_35"
              title="4_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_36').addClass('icon').text('').attr('title', '4_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_36"
              title="4_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_37').addClass('icon').text('').attr('title', '4_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_37"
              title="4_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_38').addClass('icon').text('').attr('title', '4_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_38"
              title="4_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_39').addClass('icon').text('').attr('title', '4_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_39"
              title="4_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_40').addClass('icon').text('').attr('title', '4_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_40"
              title="4_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_41').addClass('icon').text('').attr('title', '4_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_41"
              title="4_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_42').addClass('icon').text('').attr('title', '4_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_42"
              title="4_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_43').addClass('icon').text('').attr('title', '4_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_43"
              title="4_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_44').addClass('icon').text('').attr('title', '4_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_44"
              title="4_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_45').addClass('icon').text('').attr('title', '4_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_45"
              title="4_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_46').addClass('icon').text('').attr('title', '4_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_46"
              title="4_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_47').addClass('icon').text('').attr('title', '4_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_47"
              title="4_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_48').addClass('icon').text('').attr('title', '4_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_48"
              title="4_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_49').addClass('icon').text('').attr('title', '4_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_49"
              title="4_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_50').addClass('icon').text('').attr('title', '4_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_50"
              title="4_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_51').addClass('icon').text('').attr('title', '4_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_51"
              title="4_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_52').addClass('icon').text('').attr('title', '4_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_52"
              title="4_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_53').addClass('icon').text('').attr('title', '4_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_53"
              title="4_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_54').addClass('icon').text('').attr('title', '4_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_54"
              title="4_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_55').addClass('icon').text('').attr('title', '4_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_55"
              title="4_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_56').addClass('icon').text('').attr('title', '4_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_56"
              title="4_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_57').addClass('icon').text('').attr('title', '4_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_57"
              title="4_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_58').addClass('icon').text('').attr('title', '4_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_58"
              title="4_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_59').addClass('icon').text('').attr('title', '4_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_59"
              title="4_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_60').addClass('icon').text('').attr('title', '4_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_60"
              title="4_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_61').addClass('icon').text('').attr('title', '4_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_61"
              title="4_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_62').addClass('icon').text('').attr('title', '4_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_62"
              title="4_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_63').addClass('icon').text('').attr('title', '4_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_63"
              title="4_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_64').addClass('icon').text('').attr('title', '4_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_64"
              title="4_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_65').addClass('icon').text('').attr('title', '4_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_65"
              title="4_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_66').addClass('icon').text('').attr('title', '4_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_66"
              title="4_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_67').addClass('icon').text('').attr('title', '4_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_67"
              title="4_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_68').addClass('icon').text('').attr('title', '4_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_68"
              title="4_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_69').addClass('icon').text('').attr('title', '4_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_69"
              title="4_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_70').addClass('icon').text('').attr('title', '4_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_70"
              title="4_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_71').addClass('icon').text('').attr('title', '4_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_71"
              title="4_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_72').addClass('icon').text('').attr('title', '4_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_72"
              title="4_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_73').addClass('icon').text('').attr('title', '4_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_73"
              title="4_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_74').addClass('icon').text('').attr('title', '4_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_74"
              title="4_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_75').addClass('icon').text('').attr('title', '4_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_75"
              title="4_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_76').addClass('icon').text('').attr('title', '4_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_76"
              title="4_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_77').addClass('icon').text('').attr('title', '4_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_77"
              title="4_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_78').addClass('icon').text('').attr('title', '4_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_78"
              title="4_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_79').addClass('icon').text('').attr('title', '4_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_79"
              title="4_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_80').addClass('icon').text('').attr('title', '4_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_80"
              title="4_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_81').addClass('icon').text('').attr('title', '4_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_81"
              title="4_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_82').addClass('icon').text('').attr('title', '4_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_82"
              title="4_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_83').addClass('icon').text('').attr('title', '4_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_83"
              title="4_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_84').addClass('icon').text('').attr('title', '4_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_84"
              title="4_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_85').addClass('icon').text('').attr('title', '4_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_85"
              title="4_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_86').addClass('icon').text('').attr('title', '4_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_86"
              title="4_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_87').addClass('icon').text('').attr('title', '4_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_87"
              title="4_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_88').addClass('icon').text('').attr('title', '4_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_88"
              title="4_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon4_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon4_89').addClass('icon').text('').attr('title', '4_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon4_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon4_89"
              title="4_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_01').addClass('icon').text('').attr('title', '5_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_01"
              title="5_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_02').addClass('icon').text('').attr('title', '5_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_02"
              title="5_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_03').addClass('icon').text('').attr('title', '5_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_03"
              title="5_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_04').addClass('icon').text('').attr('title', '5_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_04"
              title="5_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_05').addClass('icon').text('').attr('title', '5_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_05"
              title="5_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_06').addClass('icon').text('').attr('title', '5_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_06"
              title="5_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_07').addClass('icon').text('').attr('title', '5_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_07"
              title="5_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_08').addClass('icon').text('').attr('title', '5_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_08"
              title="5_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_09').addClass('icon').text('').attr('title', '5_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_09"
              title="5_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_10').addClass('icon').text('').attr('title', '5_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_10"
              title="5_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_11').addClass('icon').text('').attr('title', '5_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_11"
              title="5_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_12').addClass('icon').text('').attr('title', '5_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_12"
              title="5_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_13').addClass('icon').text('').attr('title', '5_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_13"
              title="5_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_14').addClass('icon').text('').attr('title', '5_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_14"
              title="5_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_15').addClass('icon').text('').attr('title', '5_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_15"
              title="5_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_16').addClass('icon').text('').attr('title', '5_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_16"
              title="5_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_17').addClass('icon').text('').attr('title', '5_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_17"
              title="5_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_18').addClass('icon').text('').attr('title', '5_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_18"
              title="5_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_19').addClass('icon').text('').attr('title', '5_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_19"
              title="5_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_20').addClass('icon').text('').attr('title', '5_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_20"
              title="5_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_21').addClass('icon').text('').attr('title', '5_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_21"
              title="5_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_22').addClass('icon').text('').attr('title', '5_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_22"
              title="5_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_23').addClass('icon').text('').attr('title', '5_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_23"
              title="5_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_24').addClass('icon').text('').attr('title', '5_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_24"
              title="5_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_25').addClass('icon').text('').attr('title', '5_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_25"
              title="5_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_26').addClass('icon').text('').attr('title', '5_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_26"
              title="5_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_27').addClass('icon').text('').attr('title', '5_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_27"
              title="5_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_28').addClass('icon').text('').attr('title', '5_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_28"
              title="5_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_29').addClass('icon').text('').attr('title', '5_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_29"
              title="5_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_30').addClass('icon').text('').attr('title', '5_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_30"
              title="5_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_31').addClass('icon').text('').attr('title', '5_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_31"
              title="5_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_32').addClass('icon').text('').attr('title', '5_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_32"
              title="5_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_33').addClass('icon').text('').attr('title', '5_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_33"
              title="5_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_34').addClass('icon').text('').attr('title', '5_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_34"
              title="5_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_35').addClass('icon').text('').attr('title', '5_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_35"
              title="5_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_36').addClass('icon').text('').attr('title', '5_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_36"
              title="5_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_37').addClass('icon').text('').attr('title', '5_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_37"
              title="5_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_38').addClass('icon').text('').attr('title', '5_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_38"
              title="5_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_39').addClass('icon').text('').attr('title', '5_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_39"
              title="5_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_40').addClass('icon').text('').attr('title', '5_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_40"
              title="5_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_41').addClass('icon').text('').attr('title', '5_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_41"
              title="5_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_42').addClass('icon').text('').attr('title', '5_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_42"
              title="5_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_43').addClass('icon').text('').attr('title', '5_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_43"
              title="5_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_44').addClass('icon').text('').attr('title', '5_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_44"
              title="5_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_45').addClass('icon').text('').attr('title', '5_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_45"
              title="5_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_46').addClass('icon').text('').attr('title', '5_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_46"
              title="5_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_47').addClass('icon').text('').attr('title', '5_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_47"
              title="5_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_48').addClass('icon').text('').attr('title', '5_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_48"
              title="5_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_49').addClass('icon').text('').attr('title', '5_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_49"
              title="5_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_50').addClass('icon').text('').attr('title', '5_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_50"
              title="5_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_51').addClass('icon').text('').attr('title', '5_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_51"
              title="5_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_52').addClass('icon').text('').attr('title', '5_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_52"
              title="5_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_53').addClass('icon').text('').attr('title', '5_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_53"
              title="5_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_54').addClass('icon').text('').attr('title', '5_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_54"
              title="5_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_55').addClass('icon').text('').attr('title', '5_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_55"
              title="5_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_56').addClass('icon').text('').attr('title', '5_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_56"
              title="5_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_57').addClass('icon').text('').attr('title', '5_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_57"
              title="5_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_58').addClass('icon').text('').attr('title', '5_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_58"
              title="5_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_59').addClass('icon').text('').attr('title', '5_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_59"
              title="5_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_60').addClass('icon').text('').attr('title', '5_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_60"
              title="5_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_61').addClass('icon').text('').attr('title', '5_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_61"
              title="5_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_62').addClass('icon').text('').attr('title', '5_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_62"
              title="5_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_63').addClass('icon').text('').attr('title', '5_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_63"
              title="5_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_64').addClass('icon').text('').attr('title', '5_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_64"
              title="5_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_65').addClass('icon').text('').attr('title', '5_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_65"
              title="5_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_66').addClass('icon').text('').attr('title', '5_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_66"
              title="5_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_67').addClass('icon').text('').attr('title', '5_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_67"
              title="5_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_68').addClass('icon').text('').attr('title', '5_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_68"
              title="5_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_69').addClass('icon').text('').attr('title', '5_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_69"
              title="5_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_70').addClass('icon').text('').attr('title', '5_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_70"
              title="5_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_71').addClass('icon').text('').attr('title', '5_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_71"
              title="5_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_72').addClass('icon').text('').attr('title', '5_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_72"
              title="5_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_73').addClass('icon').text('').attr('title', '5_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_73"
              title="5_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_74').addClass('icon').text('').attr('title', '5_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_74"
              title="5_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_75').addClass('icon').text('').attr('title', '5_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_75"
              title="5_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_76').addClass('icon').text('').attr('title', '5_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_76"
              title="5_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_77').addClass('icon').text('').attr('title', '5_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_77"
              title="5_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_78').addClass('icon').text('').attr('title', '5_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_78"
              title="5_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_79').addClass('icon').text('').attr('title', '5_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_79"
              title="5_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_80').addClass('icon').text('').attr('title', '5_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_80"
              title="5_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_81').addClass('icon').text('').attr('title', '5_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_81"
              title="5_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_82').addClass('icon').text('').attr('title', '5_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_82"
              title="5_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_83').addClass('icon').text('').attr('title', '5_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_83"
              title="5_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_84').addClass('icon').text('').attr('title', '5_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_84"
              title="5_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_85').addClass('icon').text('').attr('title', '5_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_85"
              title="5_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_86').addClass('icon').text('').attr('title', '5_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_86"
              title="5_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_87').addClass('icon').text('').attr('title', '5_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_87"
              title="5_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_88').addClass('icon').text('').attr('title', '5_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_88"
              title="5_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon5_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon5_89').addClass('icon').text('').attr('title', '5_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon5_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon5_89"
              title="5_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_01').addClass('icon').text('').attr('title', '6_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_01"
              title="6_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_02').addClass('icon').text('').attr('title', '6_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_02"
              title="6_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_03').addClass('icon').text('').attr('title', '6_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_03"
              title="6_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_04').addClass('icon').text('').attr('title', '6_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_04"
              title="6_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_05').addClass('icon').text('').attr('title', '6_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_05"
              title="6_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_06').addClass('icon').text('').attr('title', '6_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_06"
              title="6_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_07').addClass('icon').text('').attr('title', '6_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_07"
              title="6_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_08').addClass('icon').text('').attr('title', '6_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_08"
              title="6_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_09').addClass('icon').text('').attr('title', '6_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_09"
              title="6_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_10').addClass('icon').text('').attr('title', '6_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_10"
              title="6_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_11').addClass('icon').text('').attr('title', '6_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_11"
              title="6_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_12').addClass('icon').text('').attr('title', '6_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_12"
              title="6_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_13').addClass('icon').text('').attr('title', '6_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_13"
              title="6_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_14').addClass('icon').text('').attr('title', '6_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_14"
              title="6_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_15').addClass('icon').text('').attr('title', '6_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_15"
              title="6_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_16').addClass('icon').text('').attr('title', '6_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_16"
              title="6_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_17').addClass('icon').text('').attr('title', '6_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_17"
              title="6_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_18').addClass('icon').text('').attr('title', '6_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_18"
              title="6_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_19').addClass('icon').text('').attr('title', '6_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_19"
              title="6_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_20').addClass('icon').text('').attr('title', '6_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_20"
              title="6_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_21').addClass('icon').text('').attr('title', '6_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_21"
              title="6_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_22').addClass('icon').text('').attr('title', '6_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_22"
              title="6_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_23').addClass('icon').text('').attr('title', '6_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_23"
              title="6_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_24').addClass('icon').text('').attr('title', '6_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_24"
              title="6_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_25').addClass('icon').text('').attr('title', '6_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_25"
              title="6_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_26').addClass('icon').text('').attr('title', '6_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_26"
              title="6_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_27').addClass('icon').text('').attr('title', '6_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_27"
              title="6_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_28').addClass('icon').text('').attr('title', '6_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_28"
              title="6_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_29').addClass('icon').text('').attr('title', '6_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_29"
              title="6_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_30').addClass('icon').text('').attr('title', '6_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_30"
              title="6_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_31').addClass('icon').text('').attr('title', '6_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_31"
              title="6_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_32').addClass('icon').text('').attr('title', '6_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_32"
              title="6_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_33').addClass('icon').text('').attr('title', '6_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_33"
              title="6_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_34').addClass('icon').text('').attr('title', '6_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_34"
              title="6_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_35').addClass('icon').text('').attr('title', '6_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_35"
              title="6_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_36').addClass('icon').text('').attr('title', '6_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_36"
              title="6_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_37').addClass('icon').text('').attr('title', '6_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_37"
              title="6_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_38').addClass('icon').text('').attr('title', '6_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_38"
              title="6_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_39').addClass('icon').text('').attr('title', '6_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_39"
              title="6_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_40').addClass('icon').text('').attr('title', '6_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_40"
              title="6_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_41').addClass('icon').text('').attr('title', '6_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_41"
              title="6_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_42').addClass('icon').text('').attr('title', '6_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_42"
              title="6_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_43').addClass('icon').text('').attr('title', '6_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_43"
              title="6_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_44').addClass('icon').text('').attr('title', '6_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_44"
              title="6_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_45').addClass('icon').text('').attr('title', '6_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_45"
              title="6_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_46').addClass('icon').text('').attr('title', '6_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_46"
              title="6_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_47').addClass('icon').text('').attr('title', '6_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_47"
              title="6_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_48').addClass('icon').text('').attr('title', '6_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_48"
              title="6_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_49').addClass('icon').text('').attr('title', '6_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_49"
              title="6_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_50').addClass('icon').text('').attr('title', '6_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_50"
              title="6_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_51').addClass('icon').text('').attr('title', '6_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_51"
              title="6_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_52').addClass('icon').text('').attr('title', '6_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_52"
              title="6_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_53').addClass('icon').text('').attr('title', '6_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_53"
              title="6_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_54').addClass('icon').text('').attr('title', '6_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_54"
              title="6_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_55').addClass('icon').text('').attr('title', '6_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_55"
              title="6_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_56').addClass('icon').text('').attr('title', '6_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_56"
              title="6_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_57').addClass('icon').text('').attr('title', '6_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_57"
              title="6_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_58').addClass('icon').text('').attr('title', '6_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_58"
              title="6_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_59').addClass('icon').text('').attr('title', '6_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_59"
              title="6_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_60').addClass('icon').text('').attr('title', '6_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_60"
              title="6_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_61').addClass('icon').text('').attr('title', '6_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_61"
              title="6_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_62').addClass('icon').text('').attr('title', '6_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_62"
              title="6_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_63').addClass('icon').text('').attr('title', '6_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_63"
              title="6_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_64').addClass('icon').text('').attr('title', '6_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_64"
              title="6_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_65').addClass('icon').text('').attr('title', '6_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_65"
              title="6_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_66').addClass('icon').text('').attr('title', '6_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_66"
              title="6_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_67').addClass('icon').text('').attr('title', '6_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_67"
              title="6_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_68').addClass('icon').text('').attr('title', '6_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_68"
              title="6_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_69').addClass('icon').text('').attr('title', '6_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_69"
              title="6_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_70').addClass('icon').text('').attr('title', '6_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_70"
              title="6_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_71').addClass('icon').text('').attr('title', '6_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_71"
              title="6_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_72').addClass('icon').text('').attr('title', '6_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_72"
              title="6_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_73').addClass('icon').text('').attr('title', '6_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_73"
              title="6_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_74').addClass('icon').text('').attr('title', '6_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_74"
              title="6_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_75').addClass('icon').text('').attr('title', '6_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_75"
              title="6_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_76').addClass('icon').text('').attr('title', '6_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_76"
              title="6_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_77').addClass('icon').text('').attr('title', '6_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_77"
              title="6_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_78').addClass('icon').text('').attr('title', '6_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_78"
              title="6_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_79').addClass('icon').text('').attr('title', '6_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_79"
              title="6_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_80').addClass('icon').text('').attr('title', '6_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_80"
              title="6_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_81').addClass('icon').text('').attr('title', '6_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_81"
              title="6_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_82').addClass('icon').text('').attr('title', '6_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_82"
              title="6_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_83').addClass('icon').text('').attr('title', '6_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_83"
              title="6_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_84').addClass('icon').text('').attr('title', '6_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_84"
              title="6_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_85').addClass('icon').text('').attr('title', '6_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_85"
              title="6_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_86').addClass('icon').text('').attr('title', '6_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_86"
              title="6_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_87').addClass('icon').text('').attr('title', '6_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_87"
              title="6_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_88').addClass('icon').text('').attr('title', '6_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_88"
              title="6_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon6_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon6_89').addClass('icon').text('').attr('title', '6_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon6_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon6_89"
              title="6_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_01').addClass('icon').text('').attr('title', '7_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_01"
              title="7_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_02').addClass('icon').text('').attr('title', '7_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_02"
              title="7_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_03').addClass('icon').text('').attr('title', '7_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_03"
              title="7_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_04').addClass('icon').text('').attr('title', '7_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_04"
              title="7_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_05').addClass('icon').text('').attr('title', '7_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_05"
              title="7_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_06').addClass('icon').text('').attr('title', '7_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_06"
              title="7_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_07').addClass('icon').text('').attr('title', '7_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_07"
              title="7_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_08').addClass('icon').text('').attr('title', '7_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_08"
              title="7_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_09').addClass('icon').text('').attr('title', '7_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_09"
              title="7_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_10').addClass('icon').text('').attr('title', '7_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_10"
              title="7_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_11').addClass('icon').text('').attr('title', '7_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_11"
              title="7_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_12').addClass('icon').text('').attr('title', '7_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_12"
              title="7_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_13').addClass('icon').text('').attr('title', '7_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_13"
              title="7_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_14').addClass('icon').text('').attr('title', '7_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_14"
              title="7_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_15').addClass('icon').text('').attr('title', '7_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_15"
              title="7_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_16').addClass('icon').text('').attr('title', '7_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_16"
              title="7_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_17').addClass('icon').text('').attr('title', '7_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_17"
              title="7_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_18').addClass('icon').text('').attr('title', '7_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_18"
              title="7_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_19').addClass('icon').text('').attr('title', '7_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_19"
              title="7_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_20').addClass('icon').text('').attr('title', '7_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_20"
              title="7_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_21').addClass('icon').text('').attr('title', '7_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_21"
              title="7_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_22').addClass('icon').text('').attr('title', '7_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_22"
              title="7_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_23').addClass('icon').text('').attr('title', '7_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_23"
              title="7_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_24').addClass('icon').text('').attr('title', '7_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_24"
              title="7_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_25').addClass('icon').text('').attr('title', '7_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_25"
              title="7_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_26').addClass('icon').text('').attr('title', '7_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_26"
              title="7_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_27').addClass('icon').text('').attr('title', '7_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_27"
              title="7_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_28').addClass('icon').text('').attr('title', '7_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_28"
              title="7_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_29').addClass('icon').text('').attr('title', '7_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_29"
              title="7_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_30').addClass('icon').text('').attr('title', '7_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_30"
              title="7_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_31').addClass('icon').text('').attr('title', '7_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_31"
              title="7_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_32').addClass('icon').text('').attr('title', '7_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_32"
              title="7_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_33').addClass('icon').text('').attr('title', '7_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_33"
              title="7_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_34').addClass('icon').text('').attr('title', '7_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_34"
              title="7_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_35').addClass('icon').text('').attr('title', '7_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_35"
              title="7_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_36').addClass('icon').text('').attr('title', '7_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_36"
              title="7_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_37').addClass('icon').text('').attr('title', '7_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_37"
              title="7_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_38').addClass('icon').text('').attr('title', '7_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_38"
              title="7_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_39').addClass('icon').text('').attr('title', '7_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_39"
              title="7_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_40').addClass('icon').text('').attr('title', '7_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_40"
              title="7_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_41').addClass('icon').text('').attr('title', '7_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_41"
              title="7_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_42').addClass('icon').text('').attr('title', '7_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_42"
              title="7_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_43').addClass('icon').text('').attr('title', '7_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_43"
              title="7_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_44').addClass('icon').text('').attr('title', '7_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_44"
              title="7_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_45').addClass('icon').text('').attr('title', '7_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_45"
              title="7_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_46').addClass('icon').text('').attr('title', '7_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_46"
              title="7_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_47').addClass('icon').text('').attr('title', '7_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_47"
              title="7_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_48').addClass('icon').text('').attr('title', '7_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_48"
              title="7_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_49').addClass('icon').text('').attr('title', '7_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_49"
              title="7_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_50').addClass('icon').text('').attr('title', '7_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_50"
              title="7_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_51').addClass('icon').text('').attr('title', '7_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_51"
              title="7_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_52').addClass('icon').text('').attr('title', '7_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_52"
              title="7_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_53').addClass('icon').text('').attr('title', '7_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_53"
              title="7_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_54').addClass('icon').text('').attr('title', '7_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_54"
              title="7_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_55').addClass('icon').text('').attr('title', '7_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_55"
              title="7_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_56').addClass('icon').text('').attr('title', '7_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_56"
              title="7_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_57').addClass('icon').text('').attr('title', '7_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_57"
              title="7_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_58').addClass('icon').text('').attr('title', '7_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_58"
              title="7_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_59').addClass('icon').text('').attr('title', '7_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_59"
              title="7_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_60').addClass('icon').text('').attr('title', '7_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_60"
              title="7_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_61').addClass('icon').text('').attr('title', '7_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_61"
              title="7_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_62').addClass('icon').text('').attr('title', '7_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_62"
              title="7_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_63').addClass('icon').text('').attr('title', '7_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_63"
              title="7_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_64').addClass('icon').text('').attr('title', '7_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_64"
              title="7_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_65').addClass('icon').text('').attr('title', '7_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_65"
              title="7_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_66').addClass('icon').text('').attr('title', '7_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_66"
              title="7_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_67').addClass('icon').text('').attr('title', '7_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_67"
              title="7_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_68').addClass('icon').text('').attr('title', '7_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_68"
              title="7_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_69').addClass('icon').text('').attr('title', '7_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_69"
              title="7_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_70').addClass('icon').text('').attr('title', '7_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_70"
              title="7_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_71').addClass('icon').text('').attr('title', '7_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_71"
              title="7_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_72').addClass('icon').text('').attr('title', '7_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_72"
              title="7_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_73').addClass('icon').text('').attr('title', '7_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_73"
              title="7_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_74').addClass('icon').text('').attr('title', '7_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_74"
              title="7_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_75').addClass('icon').text('').attr('title', '7_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_75"
              title="7_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_76').addClass('icon').text('').attr('title', '7_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_76"
              title="7_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_77').addClass('icon').text('').attr('title', '7_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_77"
              title="7_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_78').addClass('icon').text('').attr('title', '7_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_78"
              title="7_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_79').addClass('icon').text('').attr('title', '7_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_79"
              title="7_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_80').addClass('icon').text('').attr('title', '7_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_80"
              title="7_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_81').addClass('icon').text('').attr('title', '7_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_81"
              title="7_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_82').addClass('icon').text('').attr('title', '7_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_82"
              title="7_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_83').addClass('icon').text('').attr('title', '7_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_83"
              title="7_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_84').addClass('icon').text('').attr('title', '7_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_84"
              title="7_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_85').addClass('icon').text('').attr('title', '7_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_85"
              title="7_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_86').addClass('icon').text('').attr('title', '7_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_86"
              title="7_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_87').addClass('icon').text('').attr('title', '7_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_87"
              title="7_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_88').addClass('icon').text('').attr('title', '7_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_88"
              title="7_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon7_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon7_89').addClass('icon').text('').attr('title', '7_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon7_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon7_89"
              title="7_89"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_01').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_01').addClass('icon').text('').attr('title', '8_01'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_01', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_01"
              title="8_01"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_02').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_02').addClass('icon').text('').attr('title', '8_02'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_02', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_02"
              title="8_02"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_03').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_03').addClass('icon').text('').attr('title', '8_03'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_03', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_03"
              title="8_03"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_04').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_04').addClass('icon').text('').attr('title', '8_04'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_04', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_04"
              title="8_04"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_05').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_05').addClass('icon').text('').attr('title', '8_05'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_05', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_05"
              title="8_05"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_06').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_06').addClass('icon').text('').attr('title', '8_06'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_06', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_06"
              title="8_06"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_07').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_07').addClass('icon').text('').attr('title', '8_07'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_07', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_07"
              title="8_07"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_08').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_08').addClass('icon').text('').attr('title', '8_08'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_08', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_08"
              title="8_08"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_09').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_09').addClass('icon').text('').attr('title', '8_09'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_09', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_09"
              title="8_09"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_10').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_10').addClass('icon').text('').attr('title', '8_10'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_10', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_10"
              title="8_10"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_11').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_11').addClass('icon').text('').attr('title', '8_11'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_11', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_11"
              title="8_11"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_12').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_12').addClass('icon').text('').attr('title', '8_12'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_12', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_12"
              title="8_12"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_13').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_13').addClass('icon').text('').attr('title', '8_13'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_13', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_13"
              title="8_13"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_14').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_14').addClass('icon').text('').attr('title', '8_14'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_14', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_14"
              title="8_14"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_15').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_15').addClass('icon').text('').attr('title', '8_15'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_15', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_15"
              title="8_15"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_16').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_16').addClass('icon').text('').attr('title', '8_16'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_16', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_16"
              title="8_16"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_17').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_17').addClass('icon').text('').attr('title', '8_17'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_17', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_17"
              title="8_17"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_18').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_18').addClass('icon').text('').attr('title', '8_18'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_18', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_18"
              title="8_18"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_19').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_19').addClass('icon').text('').attr('title', '8_19'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_19', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_19"
              title="8_19"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_20').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_20').addClass('icon').text('').attr('title', '8_20'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_20', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_20"
              title="8_20"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_21').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_21').addClass('icon').text('').attr('title', '8_21'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_21', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_21"
              title="8_21"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_22').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_22').addClass('icon').text('').attr('title', '8_22'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_22', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_22"
              title="8_22"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_23').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_23').addClass('icon').text('').attr('title', '8_23'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_23', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_23"
              title="8_23"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_24').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_24').addClass('icon').text('').attr('title', '8_24'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_24', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_24"
              title="8_24"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_25').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_25').addClass('icon').text('').attr('title', '8_25'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_25', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_25"
              title="8_25"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_26').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_26').addClass('icon').text('').attr('title', '8_26'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_26', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_26"
              title="8_26"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_27').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_27').addClass('icon').text('').attr('title', '8_27'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_27', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_27"
              title="8_27"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_28').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_28').addClass('icon').text('').attr('title', '8_28'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_28', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_28"
              title="8_28"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_29').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_29').addClass('icon').text('').attr('title', '8_29'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_29', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_29"
              title="8_29"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_30').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_30').addClass('icon').text('').attr('title', '8_30'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_30', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_30"
              title="8_30"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_31').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_31').addClass('icon').text('').attr('title', '8_31'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_31', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_31"
              title="8_31"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_32').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_32').addClass('icon').text('').attr('title', '8_32'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_32', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_32"
              title="8_32"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_33').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_33').addClass('icon').text('').attr('title', '8_33'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_33', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_33"
              title="8_33"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_34').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_34').addClass('icon').text('').attr('title', '8_34'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_34', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_34"
              title="8_34"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_35').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_35').addClass('icon').text('').attr('title', '8_35'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_35', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_35"
              title="8_35"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_36').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_36').addClass('icon').text('').attr('title', '8_36'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_36', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_36"
              title="8_36"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_37').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_37').addClass('icon').text('').attr('title', '8_37'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_37', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_37"
              title="8_37"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_38').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_38').addClass('icon').text('').attr('title', '8_38'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_38', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_38"
              title="8_38"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_39').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_39').addClass('icon').text('').attr('title', '8_39'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_39', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_39"
              title="8_39"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_40').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_40').addClass('icon').text('').attr('title', '8_40'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_40', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_40"
              title="8_40"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_41').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_41').addClass('icon').text('').attr('title', '8_41'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_41', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_41"
              title="8_41"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_42').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_42').addClass('icon').text('').attr('title', '8_42'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_42', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_42"
              title="8_42"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_43').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_43').addClass('icon').text('').attr('title', '8_43'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_43', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_43"
              title="8_43"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_44').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_44').addClass('icon').text('').attr('title', '8_44'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_44', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_44"
              title="8_44"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_45').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_45').addClass('icon').text('').attr('title', '8_45'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_45', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_45"
              title="8_45"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_46').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_46').addClass('icon').text('').attr('title', '8_46'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_46', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_46"
              title="8_46"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_47').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_47').addClass('icon').text('').attr('title', '8_47'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_47', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_47"
              title="8_47"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_48').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_48').addClass('icon').text('').attr('title', '8_48'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_48', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_48"
              title="8_48"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_49').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_49').addClass('icon').text('').attr('title', '8_49'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_49', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_49"
              title="8_49"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_50').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_50').addClass('icon').text('').attr('title', '8_50'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_50', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_50"
              title="8_50"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_51').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_51').addClass('icon').text('').attr('title', '8_51'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_51', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_51"
              title="8_51"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_52').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_52').addClass('icon').text('').attr('title', '8_52'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_52', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_52"
              title="8_52"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_53').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_53').addClass('icon').text('').attr('title', '8_53'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_53', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_53"
              title="8_53"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_54').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_54').addClass('icon').text('').attr('title', '8_54'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_54', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_54"
              title="8_54"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_55').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_55').addClass('icon').text('').attr('title', '8_55'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_55', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_55"
              title="8_55"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_56').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_56').addClass('icon').text('').attr('title', '8_56'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_56', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_56"
              title="8_56"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_57').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_57').addClass('icon').text('').attr('title', '8_57'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_57', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_57"
              title="8_57"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_58').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_58').addClass('icon').text('').attr('title', '8_58'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_58', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_58"
              title="8_58"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_59').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_59').addClass('icon').text('').attr('title', '8_59'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_59', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_59"
              title="8_59"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_60').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_60').addClass('icon').text('').attr('title', '8_60'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_60', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_60"
              title="8_60"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_61').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_61').addClass('icon').text('').attr('title', '8_61'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_61', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_61"
              title="8_61"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_62').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_62').addClass('icon').text('').attr('title', '8_62'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_62', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_62"
              title="8_62"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_63').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_63').addClass('icon').text('').attr('title', '8_63'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_63', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_63"
              title="8_63"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_64').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_64').addClass('icon').text('').attr('title', '8_64'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_64', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_64"
              title="8_64"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_65').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_65').addClass('icon').text('').attr('title', '8_65'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_65', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_65"
              title="8_65"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_66').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_66').addClass('icon').text('').attr('title', '8_66'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_66', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_66"
              title="8_66"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_67').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_67').addClass('icon').text('').attr('title', '8_67'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_67', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_67"
              title="8_67"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_68').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_68').addClass('icon').text('').attr('title', '8_68'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_68', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_68"
              title="8_68"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_69').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_69').addClass('icon').text('').attr('title', '8_69'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_69', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_69"
              title="8_69"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_70').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_70').addClass('icon').text('').attr('title', '8_70'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_70', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_70"
              title="8_70"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_71').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_71').addClass('icon').text('').attr('title', '8_71'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_71', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_71"
              title="8_71"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_72').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_72').addClass('icon').text('').attr('title', '8_72'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_72', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_72"
              title="8_72"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_73').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_73').addClass('icon').text('').attr('title', '8_73'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_73', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_73"
              title="8_73"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_74').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_74').addClass('icon').text('').attr('title', '8_74'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_74', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_74"
              title="8_74"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_75').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_75').addClass('icon').text('').attr('title', '8_75'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_75', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_75"
              title="8_75"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_76').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_76').addClass('icon').text('').attr('title', '8_76'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_76', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_76"
              title="8_76"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_77').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_77').addClass('icon').text('').attr('title', '8_77'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_77', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_77"
              title="8_77"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_78').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_78').addClass('icon').text('').attr('title', '8_78'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_78', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_78"
              title="8_78"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_79').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_79').addClass('icon').text('').attr('title', '8_79'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_79', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_79"
              title="8_79"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_80').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_80').addClass('icon').text('').attr('title', '8_80'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_80', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_80"
              title="8_80"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_81').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_81').addClass('icon').text('').attr('title', '8_81'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_81', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_81"
              title="8_81"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_82').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_82').addClass('icon').text('').attr('title', '8_82'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_82', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_82"
              title="8_82"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_83').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_83').addClass('icon').text('').attr('title', '8_83'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_83', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_83"
              title="8_83"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_84').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_84').addClass('icon').text('').attr('title', '8_84'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_84', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_84"
              title="8_84"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_85').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_85').addClass('icon').text('').attr('title', '8_85'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_85', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_85"
              title="8_85"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_86').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_86').addClass('icon').text('').attr('title', '8_86'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_86', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_86"
              title="8_86"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_87').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_87').addClass('icon').text('').attr('title', '8_87'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_87', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_87"
              title="8_87"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_88').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_88').addClass('icon').text('').attr('title', '8_88'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_88', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_88"
              title="8_88"
            ></i>
            <i
              onclick="
                                              id=$('#icon_num').val();  
                                              $('.card .body .line .'+id).removeClass().addClass('rpg-Icon8_89').addClass(id).text('');
                                              $('#'+id).removeClass().addClass('rpg-Icon8_89').addClass('icon').text('').attr('title', '8_89'); 
                                              setCookie('ci-'+id, 'rpg-Icon8_89', 99999);
                                              $('#current_icons').hide();
                                      "
              className="icon rpg-Icon8_89"
              title="8_89"
            ></i>
          </div>
        </div>
        <small>
          <a
            href="./bard.html#"
            onclick=" setCookie('ci-icon-top', '', 99999);setCookie('ci-icon', '', 99999);setCookie('ci-icon-bot', '', 99999); location.reload(); return false;"
          >
            Reset to default icons
          </a>
        </small>
        <div>
          <button id="print-mode">Prepare for Selective Print</button>
        </div>
      </div>
    </div>
  );
}
