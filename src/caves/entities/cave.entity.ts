import { RegionEnum } from '../region.enum';
import { DifficultyEnum } from '../difficulty.enum';

export class Cave {
  private readonly title: string;
  private readonly description: string;
  private readonly location: string;
  private readonly region: RegionEnum;
  private readonly difficulty: DifficultyEnum;
  private readonly duration: string;
  private readonly image: string;
}
