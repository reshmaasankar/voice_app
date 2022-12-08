import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-speech-convert',
  templateUrl: './speech-convert.component.html',
  styleUrls: ['./speech-convert.component.scss']
})
export class SpeechConvertComponent implements OnInit {

  imageIcon = './assets/images/micro.png';
  isRecord = true;
  txt = 'Click here to start...';
  constructor(public service: VoiceRecognitionService) {
    this.service.init()
  }

  ngOnInit(): void {
  }
  startService() {
    this.service.start()
  }

  stopService() {
    this.service.stop()
    console.log(this.service.text)
    if (this.service.text.includes('download')) {
      this.getData();
    }
  }
  getData() {
    this.service.getUserData().subscribe(data => {
      let downloadURL = window.URL.createObjectURL(data);
      saveAs(downloadURL, 'image.jpg');
    })
  }
  rcdClick(record: boolean) {
    this.imageIcon = record ? './assets/images/mute.png' : './assets/images/micro.png';
    this.txt = record ? 'Click here to stop...' : 'Click here to start...';
    if (record) {
      this.startService()
    } else {
      this.stopService();
      if (this.service.text.includes('download')) {
        this.getData();
      }
    }
    this.isRecord = !this.isRecord;

  }
}
