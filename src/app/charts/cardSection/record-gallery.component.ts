import { Component } from '@angular/core';

@Component({
  selector: 'app-record-gallery',
  templateUrl: './record-gallery.component.html',
  styleUrls: ['./record-gallery.component.scss']
})
export class RecordGalleryComponent {
  records = [
    {
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
      retailer: 'WORTEN',
      pos: 'WORTEN, Akaza',
      product: '55ETN9 PRO (#942351402819)',
      date: '22.05.2025, 12:08:16',
      selected: false
    },
    {
        image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://plus.unsplash.com/premium_photo-1661328065693-ee611d7dbafe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://plus.unsplash.com/premium_photo-1661407664379-96c741b91383?q=80&w=3021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://plus.unsplash.com/premium_photo-1661627209709-bb828604fdde?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },
      {
        image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        retailer: 'WORTEN',
        pos: 'WORTEN, Akaza',
        product: '55ETN9 PRO (#942351402819)',
        date: '22.05.2025, 12:08:16',
        selected: false
      },

    // ... add more dummy or real data
  ];

  get selected() {
    return this.records.filter(r => r.selected);
  }

  selectAll() {
    this.records.forEach(r => r.selected = true);
  }

  unselectAll() {
    this.records.forEach(r => r.selected = false);
  }

  exportSelected() {
    console.log('Exporting:', this.selected);
    // implement logic
  }

  onToggle(record: any) {
    record.selected = !record.selected;
  }
}
