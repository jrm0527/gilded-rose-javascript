export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.sellIn--;
  }

  checkEdgeCases() {
    if (this.quality > 50) {
      this.quality = 50;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export class Ticket extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    super.updateQuality();
    if (this.sellIn < 11 && this.sellIn > 5) {
      this.quality += 2;
    }
    if (this.sellIn < 6 && this.sellIn > 0) {
      this.quality += 3;
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }
    super.checkEdgeCases();
  }
}

export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    super.updateQuality();
    if (this.sellIn < 0) {
      this.quality -= 2;
    } else {
      this.quality--;
    }
    super.checkEdgeCases();
  }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateQuality() {}
}

export class Brie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    super.updateQuality();
    if (this.sellIn < 0) {
      this.quality += 2;
    } else {
      this.quality++;
    }
    super.checkEdgeCases();
  }
}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};
