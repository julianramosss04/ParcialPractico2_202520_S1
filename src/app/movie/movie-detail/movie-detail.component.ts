import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;
  duracionLegible = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(id).subscribe((detail) => {
      this.movie = detail;
      this.duracionLegible = this.convertirDuracion(detail.duration);
    });
  }

  private convertirDuracion(mins: number): string {
    const horas = Math.floor(mins / 60);
    const restantes = mins % 60;
    return `${horas}H y ${restantes}m`;
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }
}
