import { expect, describe, it } from "vitest";
import {
  Standard,
  Legendary,
  Ticket,
  Brie,
  Conjured,
  items,
  updateQuality,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("Standard item reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Standard("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("Legendary items never have to be sold and never decreases quality", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
  it("Ticket quality increases by 2 when there are 10 days left", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      20
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(9);
  });
  it("Ticket quality increases by 3 when there are 5 days left", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      25
    );
    9;
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(28);
    expect(testItem.sellIn).toBe(4);
  });
  it("Ticket quality drops to 0 after concert", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      30
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
  it("Aged Brie quality increases by 2 after sellIn date", () => {
    const testItem = new Brie("Aged Brie", -5, 30);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(32);
    expect(testItem.sellIn).toBe(-6);
  });
  it("Aged Brie quality increases older it is", () => {
    const testItem = new Brie("Aged Brie", 10, 30);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(31);
    expect(testItem.sellIn).toBe(9);
  });
  it("Item quality is never more than 50", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      20,
      50
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(19);
  });

  it("Item quality is never negative", () => {
    const testItem = new Standard("basic", 10, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(9);
  });

  it("Standard item quality degrades twice as fast past sellIn", () => {
    const testItem = new Standard("basic", 0, 25);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(23);
    expect(testItem.sellIn).toBe(-1);
  });

  it("Conjured quality degrades twice as fast past sellIn", () => {
    const testItem = new Conjured("conjured", 10, 40);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(38);
    expect(testItem.sellIn).toBe(9);
  });
});
