import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit , OnDestroy {

  public todos: Array<ITodo> = [];

  private subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe(data => {
        console.log(data);
        this.todos = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    // tslint:disable-next-line:no-shadowed-variable
    this.todos.forEach((todo) => {
        if (todo.selected){
         todo.selected = false;
        }
     });
    this.todos[index].selected = true;
  }
}

const temp = [
  {
    title: 'Tokay gecko',
    description: 'Gekko gecko',
    isCompleted: false,
    isArchived: false,
    '    endDate: Date | number;': '6/6/2020',
  },
  {
    title: 'Cormorant, pied',
    description: 'Phalacrocorax varius',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '6/5/2020',
  },
  {
    title: 'Common wolf',
    description: 'Canis lupus',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '2/11/2021',
  },
  {
    title: 'Duiker, gray',
    description: 'Sylvicapra grimma',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '9/7/2020',
  },
  {
    title: 'Paca',
    description: 'Agouti paca',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '7/31/2020',
  },
  {
    title: 'Penguin, fairy',
    description: 'Eudyptula minor',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '5/19/2020',
  },
  {
    title: 'Long-billed cockatoo',
    description: 'Cacatua tenuirostris',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '1/7/2021',
  },
  {
    title: 'Cat, kaffir',
    description: 'Felis silvestris lybica',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '3/19/2020',
  },
  {
    title: 'Porcupine, prehensile-tailed',
    description: 'Coendou prehensilis',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '8/28/2020',
  },
  {
    title: 'Ring-tailed gecko',
    description: 'Cyrtodactylus louisiadensis',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '4/21/2020',
  },
  {
    title: 'Otter, giant',
    description: 'Pteronura brasiliensis',
    isCompleted: false,
    isArchived: false,
    '    endDate: Date | number;': '6/9/2020',
  },
  {
    title: 'Cormorant, pied',
    description: 'Phalacrocorax varius',
    isCompleted: false,
    isArchived: true,
    '    endDate: Date | number;': '5/14/2020',
  },
  {
    title: 'Wagtail, african pied',
    description: 'Motacilla aguimp',
    isCompleted: false,
    isArchived: true,
    '    endDate: Date | number;': '9/5/2020',
  },
  {
    title: 'Swamp deer',
    description: 'Cervus duvauceli',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '3/30/2020',
  },
  {
    title: 'Polecat, african',
    description: 'Ictonyx striatus',
    isCompleted: false,
    isArchived: false,
    '    endDate: Date | number;': '1/31/2021',
  },
  {
    title: 'Bahama pintail',
    description: 'Anas bahamensis',
    isCompleted: false,
    isArchived: false,
    '    endDate: Date | number;': '3/17/2020',
  },
  {
    title: 'Hyena, brown',
    description: 'Hyaena brunnea',
    isCompleted: false,
    isArchived: false,
    '    endDate: Date | number;': '12/12/2020',
  },
  {
    title: 'Red-necked wallaby',
    description: 'Macropus rufogriseus',
    isCompleted: true,
    isArchived: false,
    '    endDate: Date | number;': '5/21/2020',
  },
  {
    title: 'Russian dragonfly',
    description: 'Libellula quadrimaculata',
    isCompleted: false,
    isArchived: true,
    '    endDate: Date | number;': '10/30/2020',
  },
  {
    title: 'Lava gull',
    description: 'Larus fuliginosus',
    isCompleted: true,
    isArchived: true,
    '    endDate: Date | number;': '2/24/2020',
  },
];
